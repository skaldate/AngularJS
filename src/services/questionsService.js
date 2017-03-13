app.service("questionsService", questionsService);

function questionsService($http, $q) {
    var currentQuestionsSet = [];

    function formatQuestions(questions) {
        currentQuestionsSet = [];
        questions.forEach(function(question) {
            var q = {
                category: question.category,
                points: mapPoints(question.difficulty),
                graded: false,
                question: question.question,
                possible_answers: mapAnswers(question.incorrect_answers, question.correct_answer)
            };
            currentQuestionsSet.push(q);
        });
    }

    function mapAnswers(incorrect_answers, correct_answer) {
        var answers = [];
        incorrect_answers.forEach(function(ans) {
            var a = {
                answer: ans,
                isCorrect: false,
                selected: false
            }
            answers.push(a);
        });
        answers.push({
            answer: correct_answer,
            isCorrect: true,
            selected: false
        });
        shuffle(answers);
        return answers;
    }

    function shuffle(array) {
        var i = 0;
        var j = 0;
        var temp = null;

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }

    function mapPoints(level) {
        if (level == "easy") return 10;
        if (level == "medium") return 20;
        if (level == "hard") return 30;
    }

    return {
        getQuestions: function() {
            var deferred = $q.defer();
            if (currentQuestionsSet.length > 0) {
                deferred.resolve(currentQuestionsSet);
            } else {

                var questions;
                $http.get('https://opentdb.com/api.php?amount=3&category=23&difficulty=medium&type=multiple')
                    .then(function(data) {
                        questions = data.data.results;
                        formatQuestions(questions);
                        deferred.resolve(currentQuestionsSet);
                    });
            }

            return deferred.promise;
        },
        updateQuestions: function(numberOfQuestions, level, topic) {
            var deferred = $q.defer();
            var url = "https://opentdb.com/api.php?type=multiple";
            url = url + "&amount=" + numberOfQuestions
            url = url + "&category=" + topic;
            if (level != "") {
                url = url + "&difficulty=" + level;
            }
            $http.get(url).then(function(data) {
                questions = data.data.results;
                formatQuestions(questions);
                deferred.resolve(currentQuestionsSet);
            });
            return deferred.promise;
        }
    }

}
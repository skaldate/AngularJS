app.controller("questionsController", questionController);

function questionController($scope) {
    $scope.numberofQuestions = [1, 2, 3, 4, 5];
    $scope.categories = [{
            displayName: "Choose",
            value: ""
        },
        {
            displayName: "Science",
            value: "Science"
        },
        {
            displayName: "History",
            value: "History"
        },
        {
            displayName: "Sports",
            value: "Sports"
        },
        {
            displayName: "Geography",
            value: "Geography"
        }
    ];
    $scope.difficultyLevel = [{
            displayName: "Choose",
            value: ""
        },
        {
            displayName: "Easy",
            value: "easy"
        },
        {
            displayName: "Medium",
            value: "medium"
        },
        {
            displayName: "Hard",
            value: "hard"
        }
    ];
    $scope.questions = [];

    function getQuestions() {
        var questions = [{
                "category": "Sports",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Which team won the 2015-16 English Premier League?",
                "correct_answer": "Leicester City",
                "incorrect_answers": ["Liverpool", "Cheslea", "Manchester United"]
            },
            {
                "category": "Sports",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Which country will host the 2020 Summer Olympics?",
                "correct_answer": "Japan",
                "incorrect_answers": ["China", "Australia", "Germany"]
            },
            {
                "category": "Sports",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Who won the 2015 Formula 1 World Championship?",
                "correct_answer": "Lewis Hamilton",
                "incorrect_answers": ["Nico Rosberg", "Sebastian Vettel", "Jenson Button"]
            }
        ];
        questions.forEach(function(question) {
            question.possible_answers = [];

            var answers = question.incorrect_answers.concat(question.correct_answer);
            question.incorrect_answers.forEach(function(incorrect_answer) {
                var ans = {
                    answer: incorrect_answer,
                    selected: false,
                    isCorrect: false
                }
                question.possible_answers.push(ans);
            });
            question.possible_answers.push({
                answer: question.correct_answer,
                selected: false,
                isCorrect: true
            });
            shuffle(question.possible_answers);
        });
        return questions;
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

    $scope.selectedCateogry = $scope.categories[0];
    $scope.selectedDifficulty = $scope.difficultyLevel[0];
    $scope.questions = getQuestions();

    $scope.updateCategory = function(category) {
        $scope.selectedCateogry = category;
    }

    $scope.updateDifficulty = function(difficulty) {
        $scope.selectedDifficulty = difficulty;
    }

    $scope.selectAnswer = function(ans, question) {
        question.possible_answers.forEach(function(answer) {
            answer.selected = false;
        });
        ans.selected = true;
    }



}
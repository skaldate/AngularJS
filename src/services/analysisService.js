app.service('analysisService', analysisService);

function analysisService(questionsService) {

    var history = {
        correct: 0,
        incorrect: 0
    };
    var geography = {
        correct: 0,
        incorrect: 0
    };
    var science = {
        correct: 0,
        incorrect: 0
    };
    var sports = {
        correct: 0,
        incorrect: 0
    };

    function setCatorgyAnswers() {
        var historyQuestions = questionsService.getGradedQuestionsByCategory("History");
        var geographyQuestions = questionsService.getGradedQuestionsByCategory("Geography");
        var scienceQuestions = questionsService.getGradedQuestionsByCategory("Science");
        var sportsQuestions = questionsService.getGradedQuestionsByCategory("Sports");

        historyQuestions.forEach(function(question) {
            question.possible_answers.forEach(function(ans) {
                if (ans.selected && ans.isCorrect) {
                    history.correct++;
                } else {
                    history.incorrect++;
                }
            });
        });
        geographyQuestions.forEach(function(question) {
            question.possible_answers.forEach(function(ans) {
                if (ans.selected && ans.isCorrect) {
                    geography.correct++;
                } else {
                    geography.incorrect++;
                }
            });
        });
        scienceQuestions.forEach(function(question) {
            question.possible_answers.forEach(function(ans) {
                if (ans.selected && ans.isCorrect) {
                    science.correct++;
                } else {
                    science.incorrect++;
                }
            });
        });
        sports.forEach(function(question) {
            question.possible_answers.forEach(function(ans) {
                if (ans.selected && ans.isCorrect) {
                    sports.correct++;
                } else {
                    sports.incorrect++;
                }
            });
        });

    }

    return {
        getCorrectIncorrectData: function() {
            var result = [{
                "seriesname": "Correct",
                "data": [{
                        "value": history.correct
                    },
                    {
                        "value": geography.correct
                    },
                    {
                        "value": science.correct
                    },
                    {
                        "value": sports.correct
                    }
                ]
            }, {
                "seriesname": "InCorrect",
                "data": [{
                        "value": history.incorrect
                    },
                    {
                        "value": geography.incorrect
                    },
                    {
                        "value": science.incorrect
                    },
                    {
                        "value": sports.incorrect
                    }
                ]
            }];
            return result;
        }


    }
}
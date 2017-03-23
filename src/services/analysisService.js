app.service("analysisService", analysisService);
analysisService.$inject = ["questionsService"];

function analysisService(questionsService) {
    var history = {};
    var geography = {};
    var science = {};
    var sports = {};

    function resetCounts() {
        history = {
            correct: 0,
            incorrect: 0
        };
        geography = {
            correct: 0,
            incorrect: 0
        };
        science = {
            correct: 0,
            incorrect: 0
        };
        sports = {
            correct: 0,
            incorrect: 0
        };
    }
    resetCounts();


    function setCategoryAnswers() {
        resetCounts();
        var historyQuestions = questionsService.getGradedQuestionsByCategory("History");
        var geographyQuestions = questionsService.getGradedQuestionsByCategory("Geography");
        var scienceQuestions = questionsService.getGradedQuestionsByCategory("Science: Computers");
        var sportsQuestions = questionsService.getGradedQuestionsByCategory("Sports");

        historyQuestions.forEach(function(question) {
            question.possible_answers.forEach(function(ans) {
                if (ans.selected && ans.isCorrect) {
                    history.correct++;
                }
                if (ans.selected && !ans.isCorrect) {
                    history.incorrect++;
                }
            });
        });
        geographyQuestions.forEach(function(question) {
            question.possible_answers.forEach(function(ans) {
                if (ans.selected && ans.isCorrect) {
                    geography.correct++;
                }
                if (ans.selected && !ans.isCorrect) {
                    geography.incorrect++;
                }
            });
        });
        scienceQuestions.forEach(function(question) {
            question.possible_answers.forEach(function(ans) {
                if (ans.selected && ans.isCorrect) {
                    science.correct++;
                }
                if (ans.selected && !ans.isCorrect) {
                    science.incorrect++;
                }
            });
        });
        sportsQuestions.forEach(function(question) {
            question.possible_answers.forEach(function(ans) {
                if (ans.selected && ans.isCorrect) {
                    sports.correct++;
                }
                if (ans.selected && !ans.isCorrect) {
                    sports.incorrect++;
                }
            });
        });

    }

    return {
        getCorrectIncorrectData: function() {
            setCategoryAnswers();
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
                "seriesname": "Incorrect",
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
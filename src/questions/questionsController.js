app.controller("questionsController", questionsController);
questionsController.$inject = ["scoreService", "questionsService"];

function questionsController(scoreService, questionsService) {

    var questionsVm = this;
    questionsVm.numberofQuestions = [1, 2, 3, 4, 5];
    questionsVm.categories = [{
            displayName: "Any Category",
            value: ""
        },
        {
            displayName: "Science",
            value: "18"
        },
        {
            displayName: "History",
            value: "23"
        },
        {
            displayName: "Sports",
            value: "21"
        },
        {
            displayName: "Geography",
            value: "22"
        }
    ];
    questionsVm.levels = [{
            displayName: "Any Level",
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
    questionsVm.number = 2;
    questionsVm.selectedCategory = questionsVm.categories[0];
    questionsVm.selectedDifficulty = questionsVm.levels[0];
    questionsVm.total_points = 0;
    questionsVm.questions = [];

    questionsVm.updateCategory = function(category) {
        questionsVm.selectedCategory = category;
    }
    questionsVm.updateNumberOfQuestions = function(num) {
        questionsVm.number = num;
    }
    questionsVm.updateDifficulty = function(difficulty) {
        questionsVm.selectedDifficulty = difficulty;
    }
    questionsVm.selectAnswer = function(ans, question) {
        question.possible_answers.forEach(function(answer) {
            answer.selected = false;
        });
        ans.selected = true;
    }
    questionsVm.calculateScore = function() {
        scoreService.updateScore(questionsVm.questions);
    }

    questionsVm.updateQuestions = function() {
        questionsService.updateQuestions(questionsVm.number, questionsVm.selectedDifficulty.value,
                questionsVm.selectedCategory.value)
            .then(function(data) {
                questionsVm.questions = data;
            });
    }

    function getQuestions() {
        questionsService.getQuestions().then(function(data) {
            questionsVm.questions = data;
        });
    }
    getQuestions();

}
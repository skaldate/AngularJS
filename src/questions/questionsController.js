app.controller("questionsController", questionController);

function questionController($scope, scoreService, questionsService) {
    $scope.numberofQuestions = [1, 2, 3, 4, 5];
    $scope.categories = [{
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
            value: "9"
        }
    ];
    $scope.levels = [{
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

    $scope.questions = [];
    $scope.selectedCateogry = $scope.categories[0];
    $scope.selectedDifficulty = $scope.levels[0];
    $scope.number = $scope.numberofQuestions[2];
    var submitted = false;

    function getQuestions() {
        submitted = false;
        var questions = [];
        questionsService.getQuestions().then(function(data) {
            data.forEach(function(question) {
                questions.push(question);
                if (question.graded == true) {
                    submitted = true;
                }
            });
        });
        return questions;
    }

    function _reset() {

        $scope.selectedCateogry = $scope.categories[0];
        $scope.selectedDifficulty = $scope.levels[0];
        $scope.questions = getQuestions();
    }
    $scope.updateNumberOfQuestions = function(num) {
        $scope.number = num;
    }
    $scope.updateCategory = function(category) {
        $scope.selectedCateogry = category;
    }

    $scope.updateDifficulty = function(difficulty) {
        $scope.selectedDifficulty = difficulty;
    }

    $scope.updateQuestions = function() {
        questionsService.updateQuestions($scope.number, $scope.selectedDifficulty.value,
                $scope.selectedCateogry.value)
            .then(function(data) {
                submitted = false;
                $scope.questions = data;
            });
    }

    $scope.selectAnswer = function(ans, question) {
        if (submitted == false) {
            question.possible_answers.forEach(function(answer) {
                answer.selected = false;
            });
            ans.selected = true;
        }
    }
    $scope.calculateScore = function() {
        var score = 0;
        if (submitted == true) {
            return;
        }
        scoreService.updateScore($scope.questions);

        submitted = true;
    }
    _reset();



}
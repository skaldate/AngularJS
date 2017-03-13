app.controller("mainController", mainController);

function mainController($scope, scoreService) {
    $scope.score = scoreService.score;

}
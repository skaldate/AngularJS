app.controller("mainController", mainController);

function mainController($scope, scoreService, $location) {
    $scope.score = scoreService.score;
    $scope.$location = $location;
}
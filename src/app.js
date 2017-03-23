var app = angular.module("triviaApp", ["ngRoute", 'ng-fusioncharts', 'ngSanitize']);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "questions/questions.html",
        controller: "questionsController",
        controllerAs: "questionsVm"
    }).when("/analysis", {
        templateUrl: "analysis/analysis.html",
        controller: "analysisController",
        controllerAs: "analysisVm",
    })
});
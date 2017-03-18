var app = angular.module("triviaApp", ['ngRoute', 'ng-fusioncharts', 'ngSanitize']);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "questions/questions.html",
        controller: "questionsController"
    }).when("/analysis", {
        templateUrl: "analysis/analysis.html",
        controller: "analysisController",
        controllerAs: "vm",
    })
});
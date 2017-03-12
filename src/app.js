var app = angular.module("triviaApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "questions/questions.html",
        controller: "questionsController"
    }).when("/analysis", {
        templateUrl: "analysis/analysis.html",
        controller: "analysisController"
    })
});
app.controller("analysisController", analysisController);

function analysisController($scope, analysisService) {
    var vm = this;
    vm.title = "Analysis and Charts";

    vm.getGradedQuestion = function() {
        var data = analysisService.getCorrectIncorrectData();
        console.log(data);
    }
}
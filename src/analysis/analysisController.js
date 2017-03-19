app.controller("analysisController", analysisController);

function analysisController($scope, analysisService) {
    var vm = this;
    vm.title = "Analysis and Charts";

    var data = analysisService.getCorrectIncorrectData();

    $scope.dataSource = {
        chart: {
            caption: "How did you do?",
            xAxisname: "Answered",
            yAxisName: "Number of Questions",
        },
        categories: [{
            category: [{
                label: "History"
            }, {
                label: "Geography"
            }, {
                label: "Science"
            }, {
                label: "Sports"
            }]
        }],
        dataset: data
    }
}
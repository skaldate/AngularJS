app.controller("analysisController", analysisController);
analysisController.$inject = ["analysisService"];

function analysisController(analysisService) {
    var analysisVm = this;
    analysisVm.title = "Analysis and Charts";

    var data = analysisService.getCorrectIncorrectData();

    analysisVm.dataSource = {
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
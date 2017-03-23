app.controller("mainController", mainController);
mainController.$inject = ["scoreService"];

function mainController(scoreService) {
    var main = this;
    main.playerReady = true;
    main.userName = 'Trivia Guru';
    main.title = "Virginia Tech Trivia Challenge";
    main.score = scoreService.score;
    main.resetPoints = function() {
        main.score.total_points = 0;
        main.score.points = [];
    };
    main.updateUserName = function() {
        if (main.userName != "") {
            main.playerReady = true;
        }
    }

}
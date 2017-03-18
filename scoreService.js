app.service("scoreService", scoreService);
var gradedQuestions = [];

var saveGradedQuestions = function() {


}

function scoreService(questionsService) {
    return {
        score: {
            total_points: 0,
            points: [],
        },
        updateScore: function(questions) {
            var points = 0;
            questions.forEach(function(question) {
                if (!question.graded) {
                    question.possible_answers.forEach(function(ans) {
                        if (ans.selected && ans.isCorrect)
                            points = points + question.points;
                    });
                    question.graded = true;
                }
            });

            this.score.total_points = this.score.total_points + points;
            this.score.points.push(points);

            questionsService.saveGradedQuestions(questions);

        }
    }
}
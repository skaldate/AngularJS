app.directive("playersScore", playersScoreDir);

function playersScoreDir() {
    return {
        restrict: 'E',
        template: '<li>' +
            '<h3>Score per Round:  <span ng-repeat="point in vm.score.points track by $index ">{{point}},&nbsp;</span></h3>' +
            '</li>' +
            '<li>' +
            '<h3>{{vm.label}}: {{vm.score.total_points}}</h3>' +
            '</li>' +
            '<li>' +
            '<button ng-click="vm.resetScore()">Reset</button>' +
            '</li>',
        controller: function() {
            var vm = this;
        },
        controllerAs: 'vm',
        scope: true,
        bindToController: {
            score: '=', //two-way binding
            label: '@', //one-way binding
            resetScore: '&' //bind functions
        },

    }

}
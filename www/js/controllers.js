angular.module('app.controllers', [])

.controller('alarmCtrl', function($scope) {
  $scope.lol = 1;
})

.controller('statisticsCtrl', function($scope, $timeout) {

    $scope.labels = ['17.4', '18.4', '19.4', '20.4', '21.4', '22.4'];
    $scope.series = ['Hours slept'];
    $scope.data = [
      [7.6, 6.7, 7.4, 7.1, 7.5, 8.1]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
})

.controller('smartThermostatCtrl', function($scope) {
  $scope.night = 18;
  $scope.day = 22;
  $scope.active = true;
})

.controller('smartLightsCtrl', function($scope) {
  $scope.active = true;
})

.controller('tVCtrl', function($scope) {
  $scope.active = true;
})

.controller('pageCtrl', function($scope) {
})

.controller('devicesCtrl', function($scope) {
})

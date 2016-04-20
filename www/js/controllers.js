angular.module('app.controllers', [])

.controller('alarmCtrl', function($scope) {
})

.controller('statisticsCtrl', function($scope) {
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

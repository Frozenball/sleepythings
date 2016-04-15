angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.alarm', {
    url: '/alarm',
    views: {
      'tab1': {
        templateUrl: 'templates/alarm.html',
        controller: 'alarmCtrl'
      }
    }
  })

  .state('tabsController.statistics', {
    url: '/stats',
    views: {
      'tab2': {
        templateUrl: 'templates/statistics.html',
        controller: 'statisticsCtrl'
      }
    }
  })

  .state('tabsController.smartThermostat', {
    url: '/thermostat',
    views: {
      'tab3': {
        templateUrl: 'templates/smartThermostat.html',
        controller: 'smartThermostatCtrl'
      }
    }
  })

  .state('tabsController.smartLights', {
    url: '/smartlights',
    views: {
      'tab3': {
        templateUrl: 'templates/smartLights.html',
        controller: 'smartLightsCtrl'
      }
    }
  })

  .state('tabsController.tV', {
    url: '/tv',
    views: {
      'tab3': {
        templateUrl: 'templates/tV.html',
        controller: 'tVCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page', {
    url: '/page5',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.devices', {
    url: '/devices',
    views: {
      'tab3': {
        templateUrl: 'templates/devices.html',
        controller: 'devicesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/alarm')

  

});
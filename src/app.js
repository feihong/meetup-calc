import appModule from './appmodule'
import './controllers'
import './services'


appModule.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

appModule.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('order-items', {
      url: '/order-items',
      templateUrl: 'views/order-items.html',
      controller: 'OrderItemsCtrl'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'views/results.html',
      controller: 'ResultsCtrl'
    })

  $urlRouterProvider.otherwise('/main')
})

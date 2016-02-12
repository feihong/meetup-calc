import 'ionic-sdk/release/js/ionic.bundle'

angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
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

.config(function($stateProvider, $urlRouterProvider) {
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

.controller('MainCtrl', function($scope, OrderItems) {
  $scope.attendeeCount = 6
  $scope.taxPercent = 9.75
  $scope.tipPercent = 20.0
  $scope.serviceFee = 0
  $scope.orderItems = OrderItems.asObjects()
  $scope.results = {}
})

.controller('OrderItemsCtrl', function($scope, $ionicHistory) {
  $scope.cancel = function() {
    $ionicHistory.goBack()
  }

  $scope.done = function() {
    $ionicHistory.goBack()
  }
})

.controller('ResultsCtrl', function($scope, $ionicHistory) {
  $scope.back = function() {

    $ionicHistory.goBack()
  }
})

.factory('OrderItems', function() {
  var text = ''
  var items = [
    {name: 'Turkey', price: 43.5},
    {name: 'Crackers', price: 0.30},
    {name: 'Deep dish pizza', price: 25.6},
  ]

  return {
    asObjects: function() {
      return items
    },
    set: function(text) {

    },
    get: function() {
      return text
    }
  }
})

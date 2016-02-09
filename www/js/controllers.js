'use strict';

angular.module('calc')

.controller('MainCtrl', function($scope) {
  $scope.attendeeCount = 6
  $scope.taxPercent = 9.75
  $scope.tipPercent = 20.0
  $scope.serviceFee = 0
  $scope.orderItems = []
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

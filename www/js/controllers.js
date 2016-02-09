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

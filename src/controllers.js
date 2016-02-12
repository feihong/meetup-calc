import appModule from './appmodule'


appModule.controller('MainCtrl', function($scope, OrderItems) {
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

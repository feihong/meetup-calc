import appModule from './appmodule'


appModule.controller('MainCtrl', function($scope, OrderItems) {
  $scope.attendeeCount = 6
  $scope.taxPercent = 9.75
  $scope.tipPercent = 20.0
  $scope.serviceFee = 0
  $scope.itemLines = OrderItems.get().split('\n')
  $scope.results = {}

  $scope.$on('$ionicView.enter', function() {
    console.log('enter');
  })
})

.controller('OrderItemsCtrl', function($scope, $ionicHistory, OrderItems) {
  $scope.text = OrderItems.get()

  $scope.cancel = $ionicHistory.goBack

  $scope.done = function() {
    $ionicHistory.goBack()
  }
})

.controller('ResultsCtrl', function($scope, $ionicHistory) {
  $scope.back = $ionicHistory.goBack
})

import appModule from './appmodule'
import calculateResults from './calculate'


appModule.controller('MainCtrl', function($scope, OrderItems) {
  $scope.form = {
    attendeeCount: 6,
    taxPercent: 9.75,
    tipPercent: 20.0,
    serviceFee: 0,
    itemLines: OrderItems.get().split('\n'),
    results: [],
  }

  $scope.updateResults = () => {
    let values = calculateResults(OrderItems.getAsMap())
    $scope.form.results = [
      `Each attendee pays $${values.individual_amount} to the host.`,
    ]
  }

  OrderItems.onChange((value) => {
    $scope.form.itemLines = value.split('\n')
    $scope.updateResults()
  })

  $scope.updateResults()
})

.controller('OrderItemsCtrl', function($scope, $ionicHistory, OrderItems) {
  $scope.form = {
    text: OrderItems.get()
  }

  $scope.$on('$ionicView.enter', function() {
    $scope.form.text = OrderItems.get()
  })

  $scope.cancel = $ionicHistory.goBack

  $scope.done = () => {
    OrderItems.set($scope.form.text)
    $ionicHistory.goBack()
  }
})

.controller('ResultsCtrl', function($scope, $ionicHistory) {
  $scope.back = $ionicHistory.goBack
})

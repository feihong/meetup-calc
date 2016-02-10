'use strict';

angular.module('calc')

.factory('OrderItems', function() {
  var text = ''
  var items = [
    {name: 'Turkey', price: 43.5},
    {name: 'Crackers', price: 100.0}
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

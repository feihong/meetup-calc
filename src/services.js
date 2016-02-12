import appModule from './appmodule'


appModule.factory('OrderItems', function() {
  var text = ''
  var items = [
    {name: 'Turkey', price: 43.5},
    {name: 'Crackers', price: 0.30},
    {name: 'Deep dish pizza', price: 25.6},
    {name: 'Monkey brains', price: 60.0},
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

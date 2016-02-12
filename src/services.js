import appModule from './appmodule'
import parse from './dsl'


appModule.factory('OrderItems', function() {
  var text = `
steak frites 34.5
baked salmon 25.6
chicken pot pie 11.82

Bill: horchata 4
Ted: Manhattan 5.1
Tofurkey sliders 7
Kim:
Borscht 5.49
Stuffed cabbage 7.99
`
  // var items = []
  // var items = [
  //   {name: 'Turkey', price: 43.5},
  //   {name: 'Crackers', price: 0.30},
  //   {name: 'Deep dish pizza', price: 25.6},
  //   {name: 'Monkey brains', price: 60.0},
  // ]

  return {
    set: function(val) {
      text = val
    },
    get: function() {
      return text
    }
  }
})

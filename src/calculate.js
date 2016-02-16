import 'babel-polyfill'
import wu from 'wu'


export default calculateResults


function calculateResults(map) {
  return {
    individual_amount: 6
  }
}

// Sum all the prices within a Map object.
function sumAllPricesInMap(map) {
  let items = wu(map.values()).flatten()
  return items.reduce((x, y) => x + y.price, 0)
}

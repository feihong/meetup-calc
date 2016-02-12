
// Sums all the elements of an array. Optionally calling a function on each
// element before the addition operation.
export function sum(array, fn) {
  fn = fn || (x => x)
  return array.reduce((previous, current) => previous + fn(current), 0)
}

// Sum all the prices within a Map object.
export function sumAll(map) {
  let arrays = [...map.values()]
  return sum(arrays, array => {
    return sum(array, x => x.price)
  })
}

export function calculateEach(state) {
  let sums = new Map()
  for (let [key, val] of state.detailValues) {
    sums.set(key, sum(val, x => x.price))
  }

  let each = sums.get('group') / state.attendees
  sums.delete('group')

  let names = [...sums.keys()]
  names.sort(x => x.toLowerCase())

  // Multiplier that incorporates both tax and tip
  let multiplier = 1 + (state.tax + state.tip) * .01

  let calcValues = new Map()
  let totalPay = 0

  for (let name of names) {
    let val = Math.ceil(multiplier * (sums.get(name) + each)) + state.serviceFee
    totalPay += val
    calcValues.set(name + ' pays', val)
  }

  let everyoneElseCount = state.attendees - names.length
  let everyoneElse = Math.ceil(multiplier * each) + state.serviceFee
  totalPay += everyoneElse * everyoneElseCount

  let groupLabel = `All ${state.attendees} attendees pay`
  if (sums.size) {
    groupLabel = `Remaining ${everyoneElseCount} attendees pay`
  }

  calcValues.set(groupLabel, numberFormat(everyoneElse, 2))

  return {calcValues: calcValues, totalPay: totalPay}
}

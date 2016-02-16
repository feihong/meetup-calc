import appModule from './appmodule'
import parse from './dsl'


class OrderItems {
  constructor() {
    this.text = `
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
    this.handler = null
  }
  set(value) {
    if (value === this.text) {
      return
    }
    this.text = value
    if (this.handler) {
      this.handler(value)
    }
  }

  get() {
    return this.text
  }

  getAsMap() {
    return parse(this.text)
  }

  onChange(fn) {
    this.handler = fn
  }
}

appModule.service('OrderItems', OrderItems)

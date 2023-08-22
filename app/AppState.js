import { Value } from "./models/Value.js"
import { Snack } from "./models/Vendor.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {

  snacks = [
    new Snack({ name: 'Cookie', price: 3.50, picture: 'https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvb2tpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Cheetoes', price: 3.25, picture: 'https://media.gettyimages.com/id/499621987/photo/cheetos-crunchy-snack.jpg?s=612x612&w=gi&k=20&c=4Uqr8KUap-K1l2uw3Yc34PzxSaeS6OsoarYIRU9_w7g=' },)


  ]

  money = 0










  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

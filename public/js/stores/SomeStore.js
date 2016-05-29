import { EventEmitter } from 'events'
// import $ from 'jquery'
import _ from 'lodash'
import dispatcher from '../dispatcher'

class StockStore extends EventEmitter {
  constructor() {
    super()
    this.something = ""
  }

  handleActions(action) {
  console.log(action.type)
  let { symbol, json } = action
    switch(action.type) {
      case "GOT_DATA": {
        this.emit("data_add")
        break
      }
    }
  }
}
const someStore = new SomeStore
dispatcher.register(someStore.handleActions.bind(someStore))
// window.SomeStore = SomeStore//TODO for testing
// window.dispatcher = dispatcher//TODO for testing
export default someStore

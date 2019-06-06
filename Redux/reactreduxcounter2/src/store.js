import CounterReducer from './reducers/CounterReducer'
import {createStore} from 'redux'

const CounterStore = createStore(CounterReducer);

//module.exports = store;
export default CounterStore
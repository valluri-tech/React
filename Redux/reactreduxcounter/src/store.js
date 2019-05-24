import CounterReducer from './reducers/CounterReducer'
import {createStore} from 'redux'

const Store = createStore(CounterReducer);

export default Store;

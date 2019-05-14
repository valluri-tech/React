//import { createStore } from 'redux'

const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
//We are going to implement the CREATESTORE exposed by redux.
const createStore = (reducer) => {
    let state ;
    let listeners = [];

    const dispatch = (action) => {
        // lets call the reducer with state + action
        state = reducer(state, action);
        listeners.forEach((cb) => cb())
    }
    const subscribe = (listener) => {
        // maintain a list of callbacks and notify them
        listeners.push(listener);
        //unsubscribe pls - instead of a dedicated unsubscribe method we return a func
        return ()=>{
            listeners = listeners.filter(l=>l!=listener);
        }
    }
    // by the time the store is returned we wanted to have the initial state populated. We're going 
    //to dispatch a dummy action just to get the reducer to return the initial value.
    dispatch({});
    //return the current state.
    const getState = () => state;

    return {dispatch,subscribe,getState}
}

const CounterStore = createStore(CounterReducer);


export { CounterStore };


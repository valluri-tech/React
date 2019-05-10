
import { createStore } from 'redux'
//const {createStore} = Redux; //destructering
//const createStore = Redux.createStore; //pull that function
 
//This is the reducer that manages the state - updates.
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: 
        return state;
    } 
}


const counterStore = createStore(counter);

export {counterStore}

//Store - Holds the current Application State object 
//      - lets you dispatch Actions
//      - when it is created you need to tell your reducer which tells how your state is updated according to actions.

//Three important functions in Store
//getState - returns the current state
//dispatch - It lets you dispatch actions to change the state of the application.
//subscriber -  it lets you register a callback that the redux store will call anytime an action has been dispatched.
//           - ...so that you can update the UI to reflect the current application state.

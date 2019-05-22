// import { createStore } from 'redux'
const { createStore } = require('redux')

const counterReducer = (state = { counterBlob: new Map("", "") }, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return AddCounter(state, action.payload);
        // break;
        case 'INCREMENT_COUNTER':
            return IncrementCounter(state, action.payload)
        // break;
        case 'DECREMENT_COUNTER':
            return DecrementCounter(state, action.payload)
        case 'REMOVE_COUNTER':
            break;

        default:
            return state;
    }
}

const Store = createStore(counterReducer);

//lets maintain an array of counters

const AddCounter = (state, { key, value }) => {
    let newMap = new Map(state.counterBlob);
    newMap.set(key, value);
    let newState = { counterBlob: newMap }
    return newState;
}

const IncrementCounter = ({ counterBlob }, { key }) => {
    let newMap = new Map(counterBlob);
    let val = newMap.get(key) + 1;
    console.log('+' + val)
    newMap.set(key, val++);
    let obj = { counterBlob: newMap };
    return obj;
}

const DecrementCounter = (state, { key }) => {
    let newMap = new Map(state.counterBlob);
    let val = newMap.get(key)-1;
    console.log('-' +  val)
    newMap.set(key,val);
    let obj = {
        counterBlob:newMap
    }
    return obj;
}

const RemoveCounter = (list, index) => {

    //delete list[index]; - leaves a whole

    //list.splice(0,index+1);
    //return list;
    //first index'th element is excluded  on the next slice the index'th element is included
    //return list.slice(0,index).concat(list.slice(index+1)); same as below
    return [...list.slice(0, index), ...list.slice(index + 1)]
}

module.exports = { Store, AddCounter, RemoveCounter };



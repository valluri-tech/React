// import { createStore } from 'redux'
const { createStore } = require('redux')

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            break;
        case 'REMOVE_COUNTER':
            break;
        default:
            return state;
    }
}

const Store = createStore(counterReducer);

//lets maintain an array of counters

const AddCounter = (list) => {
    //list.push(0);
    //return list;

    //return a new list
    //return list.concat([0]);

    //when ever we want to add a counter we just want a placeholder of its value as 0.
    return [...list,0];
}

const RemoveCounter = (list,index)=>{

    //delete list[index]; - leaves a whole
    
    //list.splice(0,index+1);
    //return list;
    //first index'th element is excluded  on the next slice the index'th element is included
    //return list.slice(0,index).concat(list.slice(index+1)); same as below
    return [...list.slice(0,index),...list.slice(index+1)]
}

module.exports = { Store, AddCounter, RemoveCounter};



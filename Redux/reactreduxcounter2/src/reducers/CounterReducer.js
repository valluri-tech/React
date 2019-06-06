const initialState = {
    CounterMap: new Map(),
    selectedItem: -1
}
const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return AddCounter(state, action.payload)
        case 'REMOVE_COUNTER':
            return RemoveCounter(state, action.payload);
        case 'INCREMENT_COUNTER':
            return IncrementCounter(state, action.payload);
        case 'DECREMENT_COUNTER':
            return DecrementCounter(state, action.payload);
        case 'SELECT_COUNTER':
            return SelectCounter(state,action.payload)
        default:
            return state;
    }
}
const AddCounter = (state, { key }) => {
    const newState = { ...state }
    const defaultValue = 0;
    newState.CounterMap.set(key, defaultValue);
    //console.log(newState);
    return newState;
}
const RemoveCounter = (state, { key }) => {
    const newState = { ...state }
    newState.CounterMap.delete(key);
    return newState;
}
const IncrementCounter = (state, { key }) => {
    const newState = { ...state }
    let newValue = newState.CounterMap.get(key);
    newValue = newValue + 1;
    newState.CounterMap.set(key, newValue);
    return newState;
}
const DecrementCounter = (state, { key }) => {
    const newState = { ...state }
    newState.CounterMap.set(key, (newState.CounterMap.get(key) - 1))
    return newState;
}
const SelectCounter = (state,{key})=>{
    const newState = {...state};
    newState.selectedItem = key
    return newState;
}

//ES6 : 
export default CounterReducer
//ES5 :
//module.exports = CounterReducer
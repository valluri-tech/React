export const AddCounterAction = (id)=>({
    type:'ADD_COUNTER',
    payload:{
        key:id,
    }
})

export const RemoveCounterAction = (id)=>({
    type:'REMOVE_COUNTER',
    payload:{
        key :id
    }
})

export const IncrementCounterAction = (key)=>({
    type:'INCREMENT_COUNTER',
    payload:{
        key
    }
})

export const DecrementCounterAction = (key)=>({
    type:'DECREMENT_COUNTER',
    payload:{
        key
    }
})

export const SelectCounterAction = (key)=>({   
        type:'SELECT_COUNTER',
        payload:{
            key
        }
})


// export {
//     AddCounterAction,
//     RemoveCounterAction,
//     IncrementCounterAction,
//     DecrementCounterAction
// }
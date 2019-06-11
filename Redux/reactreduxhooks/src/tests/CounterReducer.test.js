const uuidv1 = require('uuid/v1');
const CounterReducer = require('../reducers/CounterReducer');


test('Test for ADD COUNTER : ', ()=>{ 
    const uuid = uuidv1();
    const intialState = { 
        CounterMap : new Map()
    }
    const action = {
        type: 'ADD_COUNTER',
        payload: {
            key:uuid,
        } 
    }
    const finalState = CounterReducer(intialState,action);
    expect(finalState.CounterMap.has(uuid)).toEqual(true);
})

test('test for REMOVE COUNTER',()=>{
    const uuid = uuidv1();
    const kvArray = [[uuid,10]]
    const newMap = new Map(kvArray);    
    //newMap.set(uuid,10)
    initialState = {
        CounterMap:newMap
    }
    action =  {
        type: 'REMOVE_COUNTER',
        payload : {
            key:uuid
        }
    }
    const finalState = CounterReducer(initialState,action)

    expect(finalState.CounterMap.has(uuid)).toEqual(false);
})

test('test for INCREMENT COUNTER', ()=>{
    const uuid = uuidv1();
    const uuid1 = uuidv1();
    const kvArray = [[uuid,10],[uuid1,12]]
    const newMap = new Map(kvArray);    
    initialState = {
        CounterMap:newMap
    }
    action = {
        type:'INCREMENT_COUNTER',
        payload : {
            key:uuid
        }
    }
    const finalState = CounterReducer(initialState,action);
    expect(finalState.CounterMap.get(uuid)).toEqual(11);   
 })

 test('test for DECREMENT COUNTER',()=>{
     const uuid = uuidv1();
     const kvArray = [[uuid,50]]
     const kvMap = new Map(kvArray)
     const initialState = {
         CounterMap : kvMap
     }
     action = {
         type:'DECREMENT_COUNTER',
         payload : {
             key:uuid
         }
     }
     const finalState = CounterReducer(initialState,action);
     expect(finalState.CounterMap.get(uuid)).toEqual(49);
 })

 test('test for SELECT COUNTER',()=>{     
     const initialState = {
        selectedItem : -1
     }
     const uuid = uuidv1();
     const action = {
         type:'SELECT_COUNTER',
         payload:{
             key:uuid
         }
     }
     expect(CounterReducer(initialState,action).selectedItem).toEqual(uuid);
 })
 

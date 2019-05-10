import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {counterStore} from './store'

const App = ()=>{
    
    const [count,SetCount] = useState(0);

    const HandleIncrement = ()=>{
        counterStore.dispatch({type:'INCREMENT'})     
        //console.log(counterStore.getState())   ;
    }
    const HandleDecrement = ()=>{
        counterStore.dispatch({type:'DECREMENT'})
        //console.log(counterStore.getState())   ;
    }
    useEffect(()=>{
        counterStore.subscribe(()=>{
            SetCount(counterStore.getState())
        })
    },[]);

    return(
        <>
        {/*
        <br/>
        {counterStore.getState()}<br/><br/>
        */}
        <br/>{count}<br/><br/>
        <button onClick={HandleIncrement}>+</button>
        <button onClick={HandleDecrement}>-</button>
        </>
    );
} 

ReactDOM.render(<App />,document.getElementById('root'));


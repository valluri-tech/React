import React from 'react';
import ReactDOM from 'react-dom';
import { CounterStore } from './store'

//counter is just a dumb component - which just know how to render the state + it has action to callback binds. 
const Counter = ({ value,Increment,Decrement }) => {
    return (
        <>
            <br />{value}<br /><br />
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </>
    )
}

CounterStore.subscribe(() => {
    ReactDOM.render(
        <Counter
            Increment = {()=>{CounterStore.dispatch({ type: 'INCREMENT' })}}
            Decrement = {()=>{CounterStore.dispatch({ type: 'DECREMENT' })}}
            value={CounterStore.getState()} />,
            document.getElementById('root'))
        ;
});

CounterStore.dispatch({ type: 'INIT' });
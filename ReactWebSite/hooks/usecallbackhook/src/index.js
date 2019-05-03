import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';

const App = () => {

    const [calls,SetCalls] = useState({});
    const memoizedCb = useCallback( ()=> Math.random(),[]); //when ever there is a change in state we get a new VALUE. 
    const unMemoizedCb = ()=>Math.random();

    const HandleClick = ()=>{
        SetCalls(
            {
                memCb : memoizedCb,
                unMemCb : unMemoizedCb
            }
        );
    }
    const {memCb,unMemCb} = calls;
     return(
        <>
        Did we receive a Memoized callback : {String(memCb===memoizedCb)}<br/>
        The value of Memoized callback fn = {memoizedCb()}<br/><br/>
        
        {/** This function will be created again and again
        Now. If this function is passed [sometimes as a callback for events]as a props to another component... that component  will render again. */}
        Did we receive a UnMemoized callback : {String(unMemCb===unMemoizedCb)}<br/>
        The value of UnMemoized callback fn = {unMemoizedCb()}<br/><br/>

        {/**When ever the state changes all the functions in this component will be created again except the memozed ones */}
        <br/><br/><button onClick={HandleClick}>Click To change State </button>
        </>
    );

};

render(<App />, document.getElementById('root'));

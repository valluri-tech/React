import React from 'react'
import { AddCounterAction, RemoveCounterAction } from '../actions/CounterActions'
import {useSelector, useDispatch } from 'react-redux'
const uuidv1 = require('uuid/v1');

const CounterController = () => {
    const dispatch = useDispatch()
    let  selItem = 0;

    const addCounterAC = (id)=>{
        dispatch(AddCounterAction(id));
    }

    const removeCounterAC = (id)=>{
        dispatch(RemoveCounterAction(id));
    }

    useSelector(state=> {selItem = state.selectedItem} ) 

    return (
        <div>
            <button  onClick={() => { addCounterAC(uuidv1()) }} >Add Counter</button>
            <button onClick={() => { removeCounterAC(selItem)}} >Remove Counter</button>
            <br /><br />
        </div>
    )
}

export default CounterController;

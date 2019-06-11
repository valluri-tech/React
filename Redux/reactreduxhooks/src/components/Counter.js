/*
Import React Components

Import Actions

Import CSS and CSSJS

Counter Component

*/
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IncrementCounterAction, DecrementCounterAction, SelectCounterAction } from '../actions/CounterActions'

import  {listStyle} from '../inlinecss/InlineCounterCss'
import '../css/counter.css'


const Counter = () => {
    let stateObj = useSelector(state => (
        {
            arr : Array.from(state.CounterMap),
            selectedItem : state.selectedItem
        }
    ))
    const dispatch = useDispatch();
    
    let itemArray = stateObj.arr;
    let selectedItem = stateObj.selectedItem;

    return (
        <div>
            <ul>
                {
                    itemArray.map((ele) => (
                        <li key={ele[0]} id={ele[0]} style={listStyle} className={ele[0] === selectedItem ? "liSelected" : "liNotSelected"}
                            onClick={(e) => { dispatch(SelectCounterAction(e.target.id)) }}>
                            <br />{ele[1]}<br />
                            <button id={ele[0]} onClick={(e) => { dispatch(IncrementCounterAction(e.target.id)) }} >+</button>
                            <button id={ele[0]} onClick={(e) => { dispatch(DecrementCounterAction(e.target.id)) }} >-</button>
                            <br />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Counter;

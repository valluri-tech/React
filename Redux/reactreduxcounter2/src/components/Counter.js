import React, { useState } from 'react'
import { connect } from 'react-redux'
import { IncrementCounterAction, DecrementCounterAction,SelectCounterAction} from '../actions/CounterActions'
import '../css/counter.css'
const Counter = ({ arr, incCounter, decCounter,selCounter}) => {

    const listStyle = {
        "listStyleType": "none",
        "border": "1px solid blue",
        "paddingBottom": "20px",
        "paddingLeft": "20px",
        "width": "150px",
        "marginBottom": "5px",
    }

    const [selItem, setselItem] = useState(0)
    return (
        <div>
            <ul>
                {
                    arr.map((ele) => (
                        <li key={ele[0]}
                            id={ele[0]}
                            style={listStyle}
                            className={ele[0] === selItem ? "liSelected" : "liNotSelected"}
                            onClick={(e) => { setselItem(e.target.id);selCounter(e.target.id) }}>
                            <br />{ele[1]}<br />
                            <button id={ele[0]} onClick={(e) => { incCounter(e.target.id) }} >+</button>
                            <button id={ele[0]} onClick={(e) => { decCounter(e.target.id) }} >-</button>
                            <br />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        arr: Array.from(state.CounterMap),
        selItem: state.currentSelectedItem
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        incCounter: (key) => { dispatch(IncrementCounterAction(key)) },
        decCounter: (key) => { dispatch(DecrementCounterAction(key)) },
        selCounter : (key) =>{dispatch(SelectCounterAction(key))}
    }
)

const hocCounterWithPS = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default hocCounterWithPS



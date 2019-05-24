import React from 'react'
import { connect } from 'react-redux'
import {IncrementCounterAction,DecrementCounterAction} from '../actions/CounterActions'


const Counter = ({value,increment,decrement}) => {
    return (
        <div>
            {value}<br/>
            <button onClick={()=>{increment()}}>+</button>
            <button onClick={()=>{decrement()}}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => ({ value: state.value })

const mapDispatchToProps = (dispatch) => ({
increment : ()=>{dispatch(IncrementCounterAction)},
decrement : ()=>{dispatch(DecrementCounterAction)}
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
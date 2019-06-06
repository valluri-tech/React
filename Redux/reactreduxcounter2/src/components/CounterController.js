import React from 'react'
import { connect } from 'react-redux'
import { AddCounterAction, RemoveCounterAction } from '../actions/CounterActions'
const uuidv1 = require('uuid/v1');

const CounterController = ({selItem,addCounter, removeCounter }) => {   
    return (
        <div>
            <button onClick={() => { addCounter(uuidv1()) }} >Add Counter</button>
            <button onClick={() => { removeCounter(selItem)}} >Remove Counter</button>
            <br /><br />
        </div>
    )
}

const mapStateToProps = (state)=>({selItem:state.selectedItem})

const mapDispatchToProps = (dispatch) => (
    {
        addCounter: (id) => { dispatch(AddCounterAction(id)) },
        removeCounter: (id) => { dispatch(RemoveCounterAction(id)) },
    }
)
//Actions.IncrementCounterAction,Actions.DecrementCounterAction


const hocCounterControllerWithPS = connect(mapStateToProps, mapDispatchToProps)(CounterController)
export default hocCounterControllerWithPS


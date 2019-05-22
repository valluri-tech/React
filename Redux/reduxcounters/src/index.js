import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Store } from './CounterStore'

const uudiV4 = require('uuid/v4')

const Counter = (props) => {
    console.log('rendering : Counter ');
    return (
        <div>
            <br />{(props.id).substring(0, 9).concat("...")}<br />
            <br />{props.val(props.id)}<br />
            <button id={props.id} onClick={props.inc}>+</button>
            <button id={props.id} onClick={props.dec}>-</button>
            <br />
        </div>
    )
}

const App = () => {

    console.log("Rendering App");

    const [Elements, SetElements] = useState({
        inputCollection: new Map()
    });

    const [currentID, setcurrentID] = useState("");

    const makeNewCounter = (key) => <Counter id={key} inc={IncrementCounter} dec={DecrementCounter} val={getValue} />

    const getValue = (id) => {
        console.log('getvalue called...!');
        const st = Store.getState();
        //console.log(st.counterBlob.get(id));-
        return st.counterBlob.get(id);
    }

    const AddCounter = () => {
        const newMap = new Map(Elements.inputCollection);
        const key = uudiV4();
        newMap.set(key, makeNewCounter(key))
        SetElements({
            inputCollection: newMap
        })
        Store.dispatch({
            type: 'ADD_COUNTER',
            payload: {
                key: key,
                value: 10
            }
        })
    }

    const IncrementCounter = (e) => {
        Store.dispatch(
            {
                type: 'INCREMENT_COUNTER',
                payload: {
                    key: e.target.id
                }
            }
        );
    }

    const DecrementCounter = (e) => {
        Store.dispatch(
            {
                type: 'DECREMENT_COUNTER',
                payload: {
                    key: e.target.id
                }
            }
        );
    }

    const DeleteCounter = (e) => {
        const newMap = new Map(Elements.inputCollection);
        newMap.delete(currentID);
        SetElements({
            inputCollection: newMap
        })
        setcurrentID("")
    }

    const ulStyle = {
        'listStyle': 'none'
    }

    const liStyle = {
        width: '150px',
        backgroundColor: 'pink',
        paddingLeft: '20px',
        paddingBottom: '20px',
        marginTop: '10px'
    }

    const arrElements = [...Elements.inputCollection]
    return (
        <>
            <button onClick={AddCounter}>Add Counter</button>{' '}
            <button onClick={DeleteCounter}>Delete Counter</button>{' '}

            <ul style={ulStyle}>
                {
                    arrElements.map(([key, value]) =>
                        <li style={liStyle}
                            key={key}
                            id={key}
                            onClick={(e) => {
                                setcurrentID((e.target.id).toString())
                            }} >{value}</li>
                    )
                }
            </ul>
            {currentID}

        </>
    );
}

Store.subscribe(() => {
    //console.log("rendering App")
    ReactDOM.render(<App />, document.getElementById('root'))
});
Store.dispatch({ type: null });




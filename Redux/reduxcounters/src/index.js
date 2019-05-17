import React, { useState } from 'react';
import ReactDOM from 'react-dom';

let counter = 0;

const Counter = (props) => {

    // const deleteCounter = (e) => {
    //     //console.log(e.target.id);
    // }

    return (
        <div>
            <br />
            {0}
            <br />
            <button>+</button><button>-</button> {' '}<button id={props._id} onClick={props._deleteCounter}>Delete</button>
            <br />
        </div>
    )
}

const App = () => {
    const [Elements, SetElements] = useState({
        inputCollection: []
    });

    const getElement = () => {
        //dispatchState({type:'ADD_COUNTER',uniqueKey:'some_unique_key'})
        return <Counter _id={counter++} _deleteCounter={DeleteCounter} />
    }

    const AddCounter = () => {
        SetElements({
            inputCollection: [...(Elements.inputCollection), getElement()]
        })
    }

    const DeleteCounter = (e) => {
        //dispatchState({type:'DELETE_COUNTER',uniqueKey:'some_unique_key'})
        //update local UI to reflect the deleted counter
        console.log(e.target.id);
    }

    const ulStyle = {
        'listStyle': 'none'
    }

    const divCatcher = (e) => {
        console.log(e.target.id);
    }
    return (
        <>
            <button onClick={AddCounter}>Add Counter</button>{' '}
            <button onClick={DeleteCounter}>Delete Counter</button>

            <ul style={ulStyle}>
                {
                    Elements.inputCollection.map((value, index) => {
                        return (
                                <li key={index}>{value}</li>
                        )
                    })
                }
            </ul>

        </>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
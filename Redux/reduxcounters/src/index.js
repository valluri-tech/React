import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const uudiV4 = require('uuid/v4')

const Counter = (props) => {
    return (
        <div>
            <br /> {0} <br />
            <button>+</button><button>-</button>
            <br />
        </div>
    )
}

const App = () => {
    const [Elements, SetElements] = useState({
        inputCollection: new Map()
    });

    const [currentID, setcurrentID] = useState("");
    
    const makeNewCounter = () => <Counter />

    const AddCounter = () => {
        const newMap = new Map(Elements.inputCollection);
        const key = uudiV4();
        newMap.set(key,makeNewCounter())
        SetElements({
            inputCollection:newMap
        })
    }

    const DeleteCounter = ()=>{
        const newMap = new Map(Elements.inputCollection);
        newMap.delete(currentID);
        SetElements({
            inputCollection:newMap
        })
        setcurrentID("")
    }
 
    const listItemSelected = (e)=> {
        setcurrentID((e.target.id).toString());
    }

    const ulStyle = {
        'listStyle': 'none'
    }
 
    const liStyle = {
        width : '150px',
        backgroundColor:'pink',
        paddingLeft : '20px',
        paddingBottom : '20px',
        marginTop:'10px'
    }

    const arrElements = [...Elements.inputCollection]
    return (
        <>
            <button onClick={AddCounter}>Add Counter</button>{' '}
            <button onClick={DeleteCounter}>Delete Counter</button>{' '}

            <ul style={ulStyle}>
                {
                    arrElements.map( ([key,value])=>  <li style={liStyle} key={key} id={key} onClick={listItemSelected}>{value}</li> )
                }
            </ul>
            {currentID}

        </>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));


 
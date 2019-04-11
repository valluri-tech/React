import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
    const [count, setCount] = useState(0);
    let btnStyle = {
        width:'100px',
        height:'25px'
    }
    return (
        <div>
            <p>You have clicked {count} times</p>
            <button onClick={ () => {setCount(count+1)} } style={btnStyle}>Click</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

//1. useState is a hook
//2. we call it inside a function component to add some local state to the component.
//3. useState returns two values - the current state value and a function that lets you update it.
//4. what is a hook : Hooks are functions that let you 'hookinto' React state and life cycle features - FROM, FUNCTION COMPONENTS.
//5. we can also create our own hooks to re-use stateful behaviour between different components.
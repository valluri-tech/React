import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

//WORKING_CODE_START
//using useref hook to refer a HTML element.
// const App = () => {

//     const m_appEleRef = useRef(null);

//     return (
//         <div>
//             <input ref={m_appEleRef} type='text'></input>
//             <button onClick={() => { console.log(m_appEleRef.current.value) }}>Click</button>
//         </div>
//     );
// }
//ReactDOM.render(<App />, document.getElementById('root'));
//WORKING_CODE_END

//using useref hook to refer a React Component.
const App2 = () => {
    const fref = useRef(null);

    return (
        <div>
            <Child xref={fref} />
            <button onClick={() => { fref.current.focus() }}>Click</button>
        </div >
    );

}
const Child = React.forwardRef((props) => {

    return (
        <div>
            <input type='text' ref={props.xref} />
        </div>
    );
});

ReactDOM.render(<App2 />, document.getElementById('root'));
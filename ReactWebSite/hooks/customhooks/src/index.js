import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const useGetWindowWidth = ()=>{

    const [winSize,SetWinSize] = useState(window.innerWidth);

    useEffect(()=>{
        //helpers
        const HandleResize = (e)=>{
            SetWinSize(window.innerWidth);
        }
        //subscribe
        window.addEventListener('resize',HandleResize);
        
        //un-subscribe
        return ()=>{
            window.removeEventListener('resize',HandleResize);
        }
    });

    return winSize;
}

function App() {

    const winsize = useGetWindowWidth();
    return (
        <div>
            window size is {winsize}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

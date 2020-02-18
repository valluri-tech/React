import React, {useState,useEffect,useCallback} from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{

    const [count,setCount] = useState(0);


    useEffect(()=>{
        console.log('Running Effect');
        const timerID = setInterval( tick,5000);
        return ()=>{
            clearInterval(timerID)
        }
    },[]);
 
    const tick = ()=>{
        console.log('Running tick');
        setCount((prevCount )=>{
            return prevCount+1; 
        });
    }

    return (
        <h3>
            {console.log('rendering')}
            {count}            
        </h3>
    )
}

const root= document.getElementById('root');

ReactDOM.render(<App/>,root);


/* IF THE ABOVE CODE IS TWEAKED IN THE BELOW FASHION - it will create a lot of problems

    const tick = ()=>{
        console.log('Running tick');
        setCount(count+1);
    }

    PROBLEM 1 : The count will never be updated in the browser.
                But, Still the timer will call the function at regular intervals
                You will get a warning : 
                    React Hook useEffect has a missing dependency: 'tick'. 
                    Either include it or remove the dependency array

    
    SO, NOW IF THE EFFECT IS MODIFIED IN THE BELOW WAY...

    useEffect(()=>{
        const timerID = setInterval( tick,5000);
        return ()=>{
            clearInterval(timerID)
        }
    },[tick]);             

    NOW YOU WILL GET A NEW WARNING.
    WARNING : The 'tick' function makes the dependencies of useEffect Hook (at line 34) change on every render.
              I.E the tick function will be created newly after every render.
    WARNING-cont : Move it inside the useEffect callback -OR- 
                   Alternatively, wrap the 'tick' definition into its own useCallback() Hook.

    So, Now the code will like below.
        useEffect(()=>{

        const tick = ()=>{
            console.log('Running tick');
            setCount(count+1);
        }

        console.log('Running Effect');
        const timerID = setInterval( tick,5000);
        return ()=>{
            console.log('Returning Effect');
            clearInterval(timerID)
        }
    },[count]);
    
    so the problem  is every 5 seconds the tick will be called.tick will change the count, as state changed render will be called.
    after render the effect will called as 'count' was changed 
    There is no use if the effect is called again and again

    ------SO THE BEST WAY IS TO CHANGE STATE THIS WAY.-------
     setCount((prevCount )=>{
            return prevCount+1; 
        });

*/
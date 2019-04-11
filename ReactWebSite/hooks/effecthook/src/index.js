import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `User clicked ${count} times`
    });

    return (
        <div>
            <p>You have clicked {count} times</p>
            <button onClick={ () => {setCount(count+1)} }>Click Counter</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

//1. useEffect - adds the ability to perform side effects(DidMount,DidUpdate,WillUnmount) from a function component.
//2. When you call useEffect : you are telling React to run your "effect" function - after flushing changes to the DOM
//3. Effects are declared inside the component so they have access to its props and state.
//4. React runs the effects after every RENDER - including the first render.
//5. Effects may optionally specify how to 'clean- up' AFTET THEM by returning a function. - see the friendStatus react component below.
function FriendStatus(){
    const[isOnline,setIsOnline] = useState(null);

    useEffect(()=>{
        //subscription calls here
        return ()=>{
        //un-subscribe data goes here.
        }
    });
    return(
        <div>
            H
        </div>
    );

}
//6. React will unsubscribe when the component un-mounts.
//7. it will also unsubscribe before re-running the effect due to a subsequent RENDER.
//8. There is a way to tell React to skip re-subscribing 
//9. Just like with useState you can use more than a single effect in a component.
//10. Hooks let you organize side effects in a component by - what peices are related.
//Ex : such as adding and removeing a subscription -  rather forcing a split based on lifecycle methods
//11. RULES OF HOOKS
// - CALL HOOKS AT THE TOP LEVEL- not in loops or conditions or nested functions
// - use hooks in RFC only

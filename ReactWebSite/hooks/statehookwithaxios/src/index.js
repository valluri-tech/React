import React, {useState} from 'react';
import axios from 'axios';

import ReactDOM from 'react-dom';

const App = ()=>{

    const [post,setPost] = useState({});
    const [val,setval] = useState("");

    /*EVENT HANDLERS*/    
    const onTextChangeHandler = (e)=>setval(e.target.value)
    const onBtnClickHandler = (e)=>{
        console.log('sending request');
        axios.get(`https://jsonplaceholder.typicode.com/posts/${val}`)        
                .then(res => {console.log(res);setPost(res.data);} )
                .catch(err => console.log(err) )
    }

    return (
        <div>
        <input type='text' value={val} onChange={onTextChangeHandler}></input><br/><br/>
        <button type='button' onClick={onBtnClickHandler}>Get</button><br/>
            {post.title}
        </div>

    )
}

const root= document.getElementById('root');

ReactDOM.render(<App/>,root);
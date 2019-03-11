import React from 'react'
import ReactDOM from 'react-dom'

/* Using the ref callback to store a reference to a DOM node in an instance property*/

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInputRef = null;
    }

    setTextInputRef = (ele) => {
        this.textInputRef = ele;
    }

    focusTextInput = () => {
        if (this.textInputRef)
            this.textInputRef.focus();
    }

    componentDidMount = ()=>{
        this.focusTextInput();
    }

    render = () => {
        return (
            <div>
                <input type='text' ref={this.setTextInputRef}/>
                <input type='button' onClick={this.focusTextInput} value='Click to focus'/>
            </div>
        );
    }
}

//ReactDOM.render(<CustomTextInput />, document.getElementById('root'));


//This is to show how we pass callback refs betweeen components.

function Child(props){
    return(
        <input type='text' ref={props.inputRef}/>
    );
}

class Parent extends React.Component{

    constructor(props){
        super(props);
        this.childInputRef = null;
    }

    InputCallbackRef = (ele)=>{
        this.childInputRef = ele;
    }

    componentDidMount(){
        if(this.childInputRef){
        this.childInputRef.focus();
        }
    }
    render = ()=>{
        return(
            <div>
                <Child inputRef={this.InputCallbackRef} />
            </div>
        );
    }
}
ReactDOM.render(<Parent />, document.getElementById('root'));

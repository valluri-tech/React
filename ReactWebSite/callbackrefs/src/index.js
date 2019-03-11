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

ReactDOM.render(<CustomTextInput />, document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'
import AppErrorBoundary from './ErrorBoundary/AppErrorBoundary'

class CustomTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef()
    }

    focusTextInput = () => {
        this.textInput.current.focus();
    }

    render = () => {
        return (
            <div>
                <input type='text' ref={this.textInput} />
                <input type='button' onClick={this.focusTextInput} value="Click to Focus on Input" />
            </div>
        );
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount = () => {
        this.textInput.current.focusTextInput();
    }
    render = () => {
        return (
            <CustomTextInput ref={this.textInput} />
        )
    }
}

//ReactDOM.render(<CustomTextInput />, document.getElementById('root'));
ReactDOM.render(<AutoFocusTextInput />, document.getElementById('root'));
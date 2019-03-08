import React from 'react'
import ReactDOM from 'react-dom'
import AppErrorBoundary from './ErrorBoundary/AppErrorBoundary'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef()
    }

    focusTextInput = ()=>{
        this.textInput.current.focus();
    }

    render = () => {
        return (
            <div>
                <input type= 'text' ref={this.textInput}/>
                <input type= 'button' onClick={this.focusTextInput} value="Click to Focus on Input"/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
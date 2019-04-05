import React from 'react'
import ReactDOM from 'react-dom'
import FancyButton2 from './FancyButton2';

const FancyButton = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type='text' style={{ width: '70px', height: '20px' }} ref={ref} />
            {props.children}
        </div>
    )
}
);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount = () => {
        this.inputRef.current.focus();
        this.inputRef.current.value="Sent via Ref";
    }

    render() {
        return (
            <div>
                <FancyButton ref={this.inputRef} />
            </div>
        );
    }
}

class App2 extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount = () => {
        this.inputRef.current.focus();
        this.inputRef.current.value="Sent via Ref";
    }

    render() {
        return (
            <div>
                <FancyButton2 ref={this.inputRef} />
            </div>
        );
    }
}

ReactDOM.render(<App2 />, document.getElementById('root'));

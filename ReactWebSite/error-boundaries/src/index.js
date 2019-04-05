import React from 'react';
import ReactDOM from 'react-dom';
import MainEB from './Error Boundaries/MainEB'

class App extends React.Component {
    render = () => {
        return (
            <div>
                <MainEB>
                    <App2 />
                </MainEB>
            </div>
        );
    }
}

class App2 extends React.Component {

    state = {
        hasError: false
    }

    handleClick = (e) => {
        try {
            //blah blah
        }
        catch (error) {
            this.setState({hasError:true});
        }
    }

    render() {
        if(this.state.hasError)
        {
            return <div>SOMETHING HAS OCCURED IN THE EVENT HANDLER</div>
        }
        return (
            <div>
                <input type='button' onClick={this.handleClick} />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
//Handling errors when something wrong happens in the event Handler.
//As Error Boundaries do not care about ERROR HANDLERS
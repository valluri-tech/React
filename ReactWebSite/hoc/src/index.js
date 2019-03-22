import React from 'react'
import ReactDOM from 'react-dom'
import {ClickCounter} from './ClickCounter'

class App extends React.Component{
    render(){
        return(
            <div>
                <ClickCounter />
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
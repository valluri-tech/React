import React from 'react'
import ReactDOM from 'react-dom'
import { Mouse } from './components/Mouse'

class App extends React.Component {
    render = () => {
        return (
            <Mouse render={(MouseState) => (
                <MouseWithJerry {...this.props} mouse={MouseState} />
            )}/>

        );
    }
}

class MouseWithJerry extends React.Component {

    render() {
        return (
            <div>
                <p>
                    The x position is {this.props.mouse.x}
                    The y position is {this.props.mouse.y}
                </p>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react'

class ClickCounter extends React.Component {

    state = {
        x: 0
    }

    onClickHandler = (e) => {
        this.setState(o => ({
            x : (o.x + 1)
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>Clicked {this.state.x} times</button>
            </div>
        );
    }
}

export {
    ClickCounter
}
 
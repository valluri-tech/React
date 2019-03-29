import React from 'react'

class HoverCounter extends React.Component {

    state = {
        count: 0
    }

    MouseOverHandler = (event) => {
        this.setState((ov) => ({
            count: ov.count + 1
        }));
    }

    render() {
        const {count} = this.state;
        return (
            <div onMouseOver={this.MouseOverHandler}>
                <h2> Hovered {count} times. </h2>
            </div>
        );

    }
}
export { HoverCounter }
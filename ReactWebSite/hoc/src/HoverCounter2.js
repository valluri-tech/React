import React from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends React.Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <div onMouseOver={incrementCount}>
                <h2> Hovered {count} times. </h2>
            </div>
        );

    }
}
export default WithCounter(HoverCounter,1);
// we can pass parameters to the hoc
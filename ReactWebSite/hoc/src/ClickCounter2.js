import React from 'react'
import WithCounter from './WithCounter'

class ClickCounter2 extends React.Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onClick={incrementCount}>
                    {this.props.name} Clicked {count} times
                </button>
            </div>
        );
    }
}

export default WithCounter(ClickCounter2,2);
//this way we can pass paramters to the hoc
import React from 'react'
import './style.css';

function FancyBorder(props) {
    let borderColor = props.color;
    return (
        <div className={'FancyBorder FancyBorder-' + borderColor}>
            {props.children}
        </div>
    );
}
//The Fancy Border component does not know their children ahead of time.
//These components should use children.props to pass CHILDREN ELEMENTS directly to THEIR output.

function WelcomeDialog() {
    return (
        <div>
            <FancyBorder color="red">
                <h1>Welcome</h1>
                <p>This is the welcome note..!</p>
            </FancyBorder>
        </div>
    );
}

export { WelcomeDialog }
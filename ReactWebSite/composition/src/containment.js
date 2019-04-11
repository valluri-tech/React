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
//The Fancy Border component does not know their children ahead of time..
//These components should use children.props to pass CHILDREN ELEMENTS directly to THEIR output..

function WelcomeDialog() {
    return (
        <div>
            <FancyBorder color="red">
            {/*the below elements gets passed in to the FancyBorder component as a 'children' prop*/}
            {/*Since the FancyBorder Compoenent renders 'props.children' - the passed elements appear in the final output*/} 
                <h1>Welcome</h1>
                <p>This is the welcome note..!</p>
            </FancyBorder>
        </div>
    );
}
export { WelcomeDialog,FancyBorder }
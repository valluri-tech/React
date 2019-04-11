import React from 'react'
import './style.css';
import { FancyBorder } from './containment';

function Dialog(props) {
    return (
        <div>
            <FancyBorder color='red'>
                <h1>{props.title}</h1>
            </FancyBorder>
        </div>
    );
}

function WelcomeDialog2() {
    return (
        <div>
            <Dialog title="Welcome" />
        </div>
    );
}

export { WelcomeDialog2 }
//1. Welcome Dialog is a special case of Dialog.
//2. compostition : a more specific component renders a more generic one CONFIGURES IT WITH PROPS
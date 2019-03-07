import React from 'react';
import { LoginButtonTextContext } from './index';

export default class LoginButton extends React.Component {
    render() {
        return (
            <div>
                <LoginButtonTextContext.Consumer>
                    {
                        (context) => {
                            return(<div><input type="button" value={context} /></div>)
                        }
                    }
                </LoginButtonTextContext.Consumer>
            </div>
        )
    }
}
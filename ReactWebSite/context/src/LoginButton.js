import React from 'react';
import { LoginButtonTextContext } from './index';

class LoginButton extends React.Component {

    render() {

        console.log(this.context);
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

/*LoginButton.contextType = LoginButtonTextContext;

export default LoginButton;*/
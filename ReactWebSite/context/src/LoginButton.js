import React from 'react';
const LoginButtonTextContext = React.createContext('Login');

export default class LoginButton extends React.Component {
    static contextType = LoginButtonTextContext;

    render() {
        return (
            <div>
                <LoginButtonTextContext.Consumer>
                    {
                        (context) => {
                            return(<div>{context}</div>)
                        }
                    }
                </LoginButtonTextContext.Consumer>
            </div>
        )
    }
}
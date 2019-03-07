import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContent from './HeaderContent'

export const LoginButtonTextContext = React.createContext('Login');

const App = () => {
    return (
        <div>
            <LoginButtonTextContext.Provider value='yo yo'>
                <HeaderContent />
            </LoginButtonTextContext.Provider>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

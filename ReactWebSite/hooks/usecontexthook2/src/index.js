import React from 'react';
import ReactDOM from 'react-dom';

import ComponentA from './components/componentA'
export const userContext = React.createContext();

const App = ()=>{
    return (
        <div>
            App Component.
            <userContext.Provider value={'dev-eng'}>
                <ComponentA />
            </userContext.Provider>  
        </div>
    )
} 

const root= document.getElementById('root');

ReactDOM.render(<App/>,root);
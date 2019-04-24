import React, {useContext } from 'react'
import ReactDOM from 'react-dom'
import { NameContext } from './context'
import { Child } from './child'

const App = () => {
    return (
        <div>
            <NameContext.Provider value = 'potter'>
                Parent Component : App
                <Child />
            </NameContext.Provider>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

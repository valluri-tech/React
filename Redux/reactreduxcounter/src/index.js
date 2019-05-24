import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Counter from './Components/Counter'

import Store from './store'

const App = () => {
    return (
        <div>
             <Counter/>
        </div>
    )
}
const root = document.getElementById('root');
ReactDOM.render(<Provider store={Store}> <App /> </Provider>, root);
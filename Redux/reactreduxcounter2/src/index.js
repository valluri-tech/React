import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import CounterStore from './store'
import CounterController from './components/CounterController'
import Counter from './components/Counter'
import { root } from './utilities/utilities'
 
const App = ({incCounter,decCounter}) => {

    return (
        <div>
            <CounterController />
            <Counter/>
        </div>
    )
}

const SmartApp = <Provider store={CounterStore}><App /></Provider>

ReactDOM.render(SmartApp, root)

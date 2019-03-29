import React from 'react'
import ReactDOM from 'react-dom'
import {ClickCounter} from './ClickCounter'
import {HoverCounter} from './hoverCounter'
import ClickCounter2 from './ClickCounter2'
import HoverCounter2 from './HoverCounter2'

class App extends React.Component{
    render(){
        return(
            <div>
               {/* <ClickCounter />
                <HoverCounter/>*/}
                <ClickCounter2 name={'Satya'}/>
                <HoverCounter2 />
            </div>
        );
    }
}

//here in ClickCounter2 we can pass props
//this props will be sent to the hoc and the hoc needs to 'prop' them to the component it wraps {...this.props}.  

ReactDOM.render(<App />,document.getElementById('root'));
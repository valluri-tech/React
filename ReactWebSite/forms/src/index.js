import React from 'react'
import ReactDOM from 'react-dom'
import {Flavor} from './SelectTag'
import {FileInputTag} from './FileInputTag'

class NameForm extends React.Component {

    state={
        name : ''
    }

    HandleSubmit= (e)=>{
        console.log('form submitted - or some custom activity');
        e.preventDefault(); 
    }

    HandleNameChange = (e) => {
        this.setState( {name:e.target.value});
    }

    render(){
        return(
        <form onSubmit={this.HandleSubmit}>
            <label>Name :</label>   <br/>
            <input type='text' value={this.state.name} onChange={this.HandleNameChange}/>
        </form>
        );
    }
}
 
//ReactDOM.render(<NameForm  />, document.getElementById('root'));
//ReactDOM.render(<Flavor  />, document.getElementById('root'));
ReactDOM.render(<FileInputTag  />, document.getElementById('root'));



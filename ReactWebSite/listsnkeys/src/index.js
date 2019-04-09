import React from 'react'
import ReactDOM from 'react-dom'
import {NumberList} from './NumberList'

class App extends React.Component {

  render(){
      const arr = this.props.input;
      const _listItems = arr.map( (num) => 
      <li key={num.toString()}>
          {num}
      </li>
      )
      return(
          <div>
              <ul>
              {_listItems}
              </ul>
          </div>
      );
  }
}
 
//ReactDOM.render(<App input={[1,2,3]}/>, document.getElementById('root'));
ReactDOM.render(<NumberList input={[1,2,3]}/>, document.getElementById('root'));



import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {

    //FIRST : lets talk about : How do I bind a (callback) function to a component instance? 

    //THERE are many ways to make sure functions have access to component attributes

    //WAY-1-BEGIN
    //BIND IN CONSTRUCTOR
    // constructor(props) {
    //     super(props);
    //     this.i = 0;
    //     this.ButtonClicked = this.ButtonClicked.bind(this);
    //     this bind ensures the callback passed to child components has access to component attributes.
    //     this function will not be created again ad again
    // }

    // ButtonClicked(e) {
    //     console.log('button clicked');
    //     console.log(this.i);
    //     this.i++;
    // }
    //WAY-1-END

    //WAY-2-BEGIN
    //CLASS PROPERTIES
    constructor(props) {
        super(props);
        this.i = 0;
    }

    // ButtonClicked = (e) =>{
    //     console.log('button clicked');
    //     console.log(this.i);
    //     this.i++;
    // }
    //WAY-2-END

    //WAY-3-BEGIN
    //BIND IN RENDER
    ButtonClicked(j=0) {
        console.log('button clicked');
        console.log(this.i);
        console.log(j);
        this.i++;
    }
    //WAY-3-END
    
    render() {
        return (
            <div>
                {/*<button cb={this.ButtonClicked} />*/}

                {/* way-3 
                    using the function.prototype.bind in render creates a new function - each time the component renders.
                    - it will have performance implications.
                    -  We can also pass a paramter to the callback
                */}
                <button onClick={this.ButtonClicked.bind(this,12)} >Click</button>

                {/* WAY-4 
                //ARROW FUNCTION IN RENDER
                //this will create a new function each time the component renders - will have performance implications.
                // We can also pass a paramter to the callback
                */}
                <br/>
                <br/>
                <button onClick={  ()=>{ return (this.ButtonClicked(10)) }  }> Click Me </button>
                
            </div>
        );
    }

}
 

//ReactDOM.render(<App />, document.getElementById('root'));
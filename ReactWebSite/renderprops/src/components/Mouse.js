import React from 'react'

class Mouse extends React.Component{
    state ={
        x:0,
        y:0
    }

    HandleMouseMove = (e)=>{
        this.setState(
            {
                x:e.clientX,
                y:e.clientY
            });
    }

    render(){
        return(
            <div style={{ height: '100%' ,backgroundColor:'grey'}} onMouseMove={this.HandleMouseMove}  >
                {this.props.render(this.state)}
            </div>
        );
    }
}
export {Mouse};
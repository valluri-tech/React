import React from 'react';

class FancyButton2 extends React.Component {
     render = () => {
        return (
            <div>
                <input type='text' style={{ width: '70px', height: '20px' }} ref={this.props.inputRef}/>
            </div>
        );
    }
}

let BridgingRef = React.forwardRef((props, ref) => {
    return (
            <div>
                <FancyButton2 inputRef = {ref}/>
                {props.children}
            </div>
            )
        }
);
export default BridgingRef;

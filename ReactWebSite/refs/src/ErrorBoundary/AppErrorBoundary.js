import React from 'react'


export default class AppErrorBoundary extends React.Component {

    state = {
        hasError:false
    }

    static getDerivedStateFromError(error) {
    this.setState({hasError:true})
    }

    render = () => {
        if(this.state.hasError){
            return(
                <div>
                    Looks Like an Error occured while rendering children of AppErrorBoundary
                </div>
            );
        }
        return this.props.children;
    }
}

import React from 'react'

export default class MainEB extends React.Component {

    state = {
        hasError:false,
    }
    static getDerivedStateFromError = (error) => {
        this.setState({hasError:true})
    }

    componentDidCatch = (error,Info) => {
    }

    render = () => {
        if(this.state.hasError)
        return (
            <div>SOMETHING WENT WRONG</div>
        );

        return this.props.children;
    }
}
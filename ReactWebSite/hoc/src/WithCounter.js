import React from 'react'

//The hoc must be in camel case

const withCounter = (WrappedComponent,incrementBy) => {

    class WithCounter extends React.Component {

        state = {
            count: 0
        }

        incrementCount = (e) => {
            this.setState(o => ({
                count: (o.count + incrementBy)
            }))
        }

        render() {
            console.log({...this.props} )
            return <WrappedComponent 
            {...this.props} 
            count={this.state.count} 
            incrementCount={this.incrementCount} />
        }
       
    }
    return WithCounter;
}
 /*The HOC adds two props to the wrapped component and  
        simply passes down what ever remaining props have been specified.*/ 

export default withCounter;
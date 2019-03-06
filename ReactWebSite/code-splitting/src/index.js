import React from 'react';
import ReactDOM from 'react-dom';
import myErrorBoundary from './MyErrorBoundry';
//import {add} from './math';
const OtherComponent = React.lazy(() => import('./OtherComponent'));


class App extends React.Component {

    getAddition = (a, b) => {
        import("./math").then(
            (OBJ) => {
                console.log(OBJ.add(a, b));
            }
        )
    }

    render() {
        return (
            <div>
                {/*{  this.getAddition(5,5)   }*/}
                <myErrorBoundary>
                    <React.Suspense fallback={<div>Loading Other Component</div>} >
                        <OtherComponent />
                    </React.Suspense>
                </myErrorBoundary>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
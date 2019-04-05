import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MyErrorBoundary from './MyErrorBoundry';
//import {add} from './math';
const OtherComponent = lazy(() => import('./OtherComponent'));

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

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
                <Router>
                    <Suspense fallback={<div>Loading Other Component</div>} >
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                        </Switch>
                        {/*<OtherComponent />*/}
                    </Suspense>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
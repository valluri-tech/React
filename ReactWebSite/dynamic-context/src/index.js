import React from 'react';
import ReactDOM from 'react-dom';
import ThemedButton from './themed-button';
import { themes, ThemeContext, ThemeContext2 } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

function ToolBar(props) {
    return (
        <ThemedButton onClick={props.changeTheme} >
            <div>
                ChangeTheme
            </div>
        </ThemedButton>
    );
}

class App extends React.Component {
    state = {
        theme: themes.dark,
    }
    toggleTheme = (e) => {
        this.setState(
            (old) => ({
                theme: old.theme === themes.dark ? themes.light : themes.dark
            })
        );
    }
    render() {
        return (
            <div>
                {/* should provide context provider data here */}
                <ThemeContext.Provider value={this.state.theme}>
                    <ToolBar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
            </div>
        );
    }
}

//ReactDOM.render(<App />, document.getElementById('root'));



class App2 extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         theme: themes.dark,
    //         toggleTheme: this.toggleTheme
    //     }
    // }


// Initializers are always executed before the constructor.
// But if you write a default constructor - out all the initialzers inside the constructor IN ORDER - use babel to find out more.
//below code works as-of-now : if state is initlized first and if the toggletheme is delared down - this wont work
    toggleTheme = () => {
        this.setState(old =>
            (
                { theme: old.theme === themes.light ? themes.dark : themes.light }
            )
        );
    }
    state = {
        theme: themes.dark,
        toggleTheme: this.toggleTheme
    }

//And if you would like to put everything in the constructor - it looks like below    
/*constructor(props){
    
    super(props);

    this.toggleTheme = () => {
        this.setState(old =>
            (
                { theme: old.theme === themes.light ? themes.dark : themes.light }
            )
        );
    }

    this.state = {
        theme: themes.dark,
        toggleTheme: this.toggleTheme
    }
    //   By the time state is constructed it must know what is toggleTheme.
    //   So define the function "this.toggleTheme = () => {" above it.
}*/

    render() {
        return (
            <div>
                <ThemeContext2.Provider value={this.state}>
                    <Content />
                </ThemeContext2.Provider>
            </div>
        );
    }
}

function Content() {
    return (
        <ThemeTogglerButton />
    );
}

ReactDOM.render(<App2 />, document.getElementById('root'));
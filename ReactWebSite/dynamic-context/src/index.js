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

    constructor(props) {
        super(props);
        this.toggleTheme = ()=> {
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

    }

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
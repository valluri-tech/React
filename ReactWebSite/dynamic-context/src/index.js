import React from 'react';
import ReactDOM from 'react-dom';
import ThemedButton from './themed-button';
import { themes, ThemeContext } from './theme-context';

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

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import { ThemeContext2 } from './theme-context';

function ThemeTogglerButton() {
    return (
        <ThemeContext2.Consumer>
            {
                ({ theme, toggleTheme }) => (
                    <button
                        onClick={toggleTheme}
                        style={{ backgroundColor: theme.background }}>
                        ToggleTheme
                </button>
                )
            }
        </ThemeContext2.Consumer>
    );
}

export default ThemeTogglerButton;
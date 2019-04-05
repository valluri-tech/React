import React from 'react';
import {ThemeContext} from './theme-context';

export default class ThemedButton extends React.Component {
    render() {
        let theme = this.context;
        return (
            <div>
                <button {...this.props} style={{width:'auto',height:'auto',backgroundColor:theme.background}}/>
            </div>
    );
    }
}
ThemedButton.contextType = ThemeContext;

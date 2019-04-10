import React from 'react'

class Flavor extends React.Component {

    state = { value: '' }

    HandleFormSubmit = (e) => {
        console.log(this.state.value);
        e.preventDefault();
    }

    HandleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.HandleFormSubmit}>
                <label>Pick ur fav flavor<br />
                    <select value={this.state.value} onChange={this.HandleChange}>
                        <option value='Coconut'>Coconut</option>
                        <option value='Grape'>Grape</option>
                        <option value='Honey'>Honey</option>
                        <option value='Orange'>Orange</option>
                    </select>
                </label><br/>
                <input type='submit' value='Submit' />
            </form>

        );
    }
}
//HTML : <option selected value="coconut">Coconut</option>
//React : Instead of using the selected attribute , uses a value attribute on the root select tag.
export {
    Flavor
}
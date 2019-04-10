import React from 'react'

class FileInputTag extends React.Component {

    constructor() {
        super()
        this.fileRef = React.createRef();
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        console.log(this.fileRef.current.files);
    }

    render() {
        return (
            <form  onSubmit={this.HandleSubmit} >
                <label for='file' >Select File to Upload</label><br /><br />
                <input id='file' type='file' ref={this.fileRef} /> <br /><br />
                <button type='submit'> Submit Form </button>
            </form>
        );
    }
}

export {
    FileInputTag
}

//When you use the file input ->   <input type='file' />  Because its value is read only - it is an uncontrolled component in React.
//This value can not be set programatically - so uncontrolled component.- use a ref.
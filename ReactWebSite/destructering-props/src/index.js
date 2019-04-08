import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor() {
        super();
        this.properties = [
            {
                name: 'smith',
                age: 22,
                address: {
                    num: 121,
                    street: 'Glen'
                }
            }
            ,
            {
                name: 'Kevin',
                age: 25,
                address: {
                    num: 894,
                    street: 'caul'
                }
            }
        ]
    }

    render() {
        return (
            <div>
                <Listing listing= { this.properties[0]} />
            </div>
        );
    }
}

//just extract whjat ever is needed.
const Listing = (
        {
            listing:{
            name,
            address:{
                num,
                street
            }
            }
        }
) =>{
    return(
    <div>
        <h4>Listing : name</h4>
        <h3>{name}</h3> 
        
        <h4>Listing : State</h4>
        <h3>{street}</h3>      
    </div>
    );
}

// const Listing = ({listing}) =>(
//     <div>
//         <h4>Listing</h4>
//         <h3>{listing.name}</h3>      
//     </div>
//     );


// const obj = {
//     name : "name1",
//     age:25,
//     location:{
//         country:'ind',
//         pincode:9132
//     }
// }
 
// const {name,location:{
//     country
// }} = obj;
// console.log(country);
// console.log(name);

ReactDOM.render(<App />, document.getElementById('root'));


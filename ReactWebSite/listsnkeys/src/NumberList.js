import React from 'react'

function ListItem(props){
    const val = props.num; 
    return(
        /* DON NOT PASS THE KEY HERE */
        //<li key={val.toString()}>{val}</li>
        <li>{val}</li>
    )
}

//A good rule of thumb is that elements inside the map() call need keys.
//Keys used within arrays - should be unique among their siblings
function NumberList(props) {
    const arr = props.input;

    return(
        arr.map((num)=>{
            return( <ListItem num={num} key={num.toString()}/> );
        })
    );
  }

  export {NumberList}
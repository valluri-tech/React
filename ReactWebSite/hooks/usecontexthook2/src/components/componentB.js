import React, { useContext } from 'react'
import {userContext} from '../index'

const ComponentB = ()=>{
    
    const matter = useContext(userContext);

    return(
        <div>
            Component B - {matter} <br/>            
        </div>
    )
}
export default ComponentB;
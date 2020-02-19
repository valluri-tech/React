import React from 'react'
import ComponentB from './componentB'

const ComponentA = ()=>{
    return(
        <div>
            Component A <br/>            
            <ComponentB />
        </div>
    )
}
export default ComponentA;
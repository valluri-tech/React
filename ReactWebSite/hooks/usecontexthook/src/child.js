import React, {useContext} from 'react'
import {NameContext} from './context'

const Child = ()=>{
    const data = useContext(NameContext)
    return(
        <div>
            Child Component<br/>
            Context Value passed is : {data}
        </div>
    )
}

export {Child}
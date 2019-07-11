import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

let sleep = (ms) => {
    return new Promise((res, rej) => setTimeout(() => res(ms), ms))
}

let api = {
    getFruits: async () => {
        await sleep(2000)
            .then((res) => console.log(`waited for ${res} seconds and returning data`))

        return {
            data: {
                results: [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }]
            }
        }
    }
}
 

const App = ({ id }) => {

    let [matter, setMatter] = useState({});
 
    useEffect(
        () => {

            async function getData() {
                let blob = await api.getFruits()
                setMatter(blob.data.results[id])
            }

            getData()
        },[id]
    )

    const GetOutput = ()=>{
        if(Object.entries(matter).length ===0 && matter.constructor===Object )
         return <div>Loading...</div>
         else return <div>{matter.name}</div>
    }

    return (
        <div>
            API call output will be displayed below<br/>
            {GetOutput()}
        </div>
    )
}


ReactDOM.render(<App id={0} />, document.getElementById('root'))
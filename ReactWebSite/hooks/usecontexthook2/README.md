1. Top level component code.
        
        export const userContext = React.createContext();
        
        <userContext.Provider value={'dev-eng'}>
            <ComponentA />
        </userContext.Provider>  

2. Child component where you want to use the same.

    import {userContext} from '../abovefile'

    const matter = useContext(userContext);

    //JSX code below :
    Component B - {matter} <br/>            
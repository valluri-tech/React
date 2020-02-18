1. useEffect can be used in three use cases
   When component mounts
   When component updates
   When component unmounts

2. The below effect will be run when ever 
        - the component mounts / is loaded
        - the state of 'any' variable changes
    useEffect((){
        //effect code goes here
    });   

3.  The below effect will be run when ever 
        - the component mounts / is loaded only
        - [] by mentioning about the empty error we say that there are no-depencies for this effect
        - So React does not run this effect hook even if there is a change in any state variables
    useEffect((){
        // effect code goes here
    },[]);

        - So if this effect depends on any state variable, include it in the array
        - So if this effect depends on any function that uses this state variable, include the variable in the array/ put the function inside the hook
        - Note that after every render - the function that you include will be re-created - so try to memoize it using 'useCallback'
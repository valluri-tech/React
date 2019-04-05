1. A Mouse componenet has a functionality of calculating the current mouse position.

2. If we want to re-use this functionality we pass a render prop to the Mouse Component.

3. This props is a function given by the user [of the Mouse Component], which will be called by the Mouse Component.

4. Now when the Mouse component calls the function it passes the x,y co-ordinates.

5. Now when this function is called we render what ever we want with the data returned by the Mouse Component.
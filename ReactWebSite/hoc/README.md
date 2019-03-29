1. A Technique in React which is used for Re-using Component Logic.

2. They are just a pattern.

3. A higher order component is a pattern in which a FUNCTION  takes a COMPONENT and returns a NEW COMPONENT.

4. A Component : Transforms Props to UI
   A HOC : Transforms one component into another component.

5. In this example we will create two components.
   one component shows a button and the number of times one clicks it.
   other component show the number of times a mouse was hovered over it.

6. Here we can notice that the counter functionality is duplicated.

7. If both the components have the same parent then we can 'lift the state up and remove duplicate functionality'

8. But if they are of the same components lifting state up would be "difficult?".

9. HOC : Need to share common functionality and re-use code.

10. 

1. React provides another way to set REF called callbackREF's - this gives you more fine-grain control over when ref's are set and unset.

2. Instead of passing a ref Attribute created by using createRef pass a function.

3. The function receives a 'React Component' or 'HTML DOM' as its argument which can be stored and accessed elsewhere.

4. React will call the callback ref with the element when the component mounts ANd calls it with NULL when the component unmounts.

5. Refs are guarenteed to be upto date before the CDM and CDU.

6. Added another Parent Component to demonstrate how callback refs can be passed between components.
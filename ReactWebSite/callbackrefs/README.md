1. React provides another way to set REF called callbackREF's - this gives you more fine-grain control over when ref's are set and unset.

2. Instead of passing a ref Attribute created by using createRef pass a function.

3. The function receives a 'React Component' or 'HTML DOM' as its argument which can be stored and accessed elsewhere.

4.
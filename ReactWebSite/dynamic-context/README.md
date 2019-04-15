1. Change the button background color dynamically when clicked.

2. The button is a subscriber to the context.

3. The button click will be sent back to the parent callback passed via props to the subscriber/button.

4. The callback will change the state which is used in the provider 'value';

5. We have also used context api so that a nested component somewhere deep can update the context.

6. +NOTE : Did not understand the point as to why we had to put 'toggleTheme' function inside the constrcutor.
   -NOTE : moved the function outside the constructor and Arrowed it.
   
7.   http://2ality.com/2017/07/class-fields.html
     Open babel and write javscript code to see how it transforms.
8. Context is kind of the only situation where it's recommended to add a function to state.
9.  
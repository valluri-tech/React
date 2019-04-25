1. A common use case of useref : to access a child imperatively.

2. useref : this hook returns a MUTABLE ref object whose .current property is initialized to the passed argument. [object will persist till the full lifetime of the component]

3. refs : primarily a way to access DOM.

4. <div ref={myRef} />
When a ref is passed in to a HTML element - react will set the .current property of "myRef" to the corresponding DOM node - WHENEVER THE NODE CHANGES.

5. useref vs ref : useref is more useful that ref attribute - its handy for keeping any mutable value around.

6. useref : will give you the same ref object on every render.

7. useRef does not notify you when its content changes - mutating the current property does not cause a re-render.
   IF YOU WANT TO RUN SOME CODE WHEN REACT ATTACHES OR DETACHES A REF TO A DOM NODE  - YOU MAY WANT TO USE A CALLBACKREF/How can I measure a DOM node?
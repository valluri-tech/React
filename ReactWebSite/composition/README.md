1. React recommends us to use 'composition' instead of 'inheritance' ->  to reuse code between components.
2. Usage of Children prop : 
3. If you want to re-use non-UI functionality then ->Extract it into a separate javascript module.
   The Components may import it and use that function/object/class with out extending it.
4. React would never recommend creating compoenet Inheritance heirarchies...!
5. PROPS and COMPOSITION give you all the flexibility you need to customize your components look and behaviour in a explicit and safe      way.
6. note : components may accept arbitary props, including primitive values,React Elements OR functions.
7. Note the usage of classNAME in "<div className={}>"
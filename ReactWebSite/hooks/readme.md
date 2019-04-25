1. We can use state and other React features with out writing a class.
2. State hook : use state inside a function. No boilerplate - no class

Hooks :
   useCallback,useMemo : These Hooks Prevent unneccessary re-renders making your code way more efficient.
3. useCallback and useMemo - both of them take a function and an array of dependencies - like useEffect.
4. The functions return value will ONLY be changed if one of the dependencies value changes - otherwise a cached value is returned.
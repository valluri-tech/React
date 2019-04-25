
//nothing related to hooks using refs
//IF YOU USE THE BELOW CODE ..i.e if you wanna pass a ref to the function component ...
//WE GET A WARNING THAT FUNCTION COMPONENTS CAN NOT BE GIVEN REFs.
//the correct way if you wanna pass is 
//<AutoFocusText Xref = {childRef}/>
//the mesage also says that ATTEMPTS TO ACCESS THIS REF WILL FAIL. DID YOU MEAN REACT.FORWARDREF . ?
// const App2 = () => {
//     const childRef = useRef(null);
//     return (
//         <div>
//             <AutoFocusText ref = {childRef}/>
//         </div>
//     );
// }
// const AutoFocusText = () => {
//     const m_textRef = useRef(null);
//     const FocusOnText = () => {
//         m_textRef.current.focus();
//     }
//     return (
//         <>
//             <input type='text' ref={m_textRef} />
//         </>
//     );
// }

// ReactDOM.render(<App2 />, document.getElementById('root'));
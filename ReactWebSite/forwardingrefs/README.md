1. Forwarding ref is an opt in feature of React where a component takes a Ref and passes it further down.[or forward it to a child]

2. Inside App we use a third party Fancy Button component.  And if we want to control that component. they just ask you to forward a "ref" attribute created using React.CreateRef();

3. This ref can be controled by the user of the component. This way you can write re-usable components.

4. the ref is obtained by the library developer. So the library developer can get the ref only via a function React.ForwardRef.

5. App2 has been implemented to show that the 3rd party component can also be a class.
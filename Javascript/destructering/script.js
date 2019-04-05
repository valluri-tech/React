//Destructering --------------- Objects ---------

// to add one property at a time to an object - dot notation.
var student = {};
student.name = "Vick";
student.age = 22;
//console.log(student);

// extract data one property at a time
var name = student.name;
//console.log(name);

// to add multiple properties to an object
var classRoom = {
    students: 120,
    projector: true
}

//destructering.
//to extract multiple properties from an object.
var { name, age } = student;
//console.log(name);
//console.log(age);

//de-structure results of function invocations.
function getUserInfo() {
    return {
        FirstName: 'Brick',
        old : 33
    }
}
var {FirstName, old} = getUserInfo();
//console.log(FirstName);



//Destructering --------------- ARRAYS ---------
var user = ['Smith',32,'smith@origin.com','Cali'];
var [nameA,ageA,emailA,locationA] = user;
//console.log(nameA);

//array destructering with function invocation
var csvData = "one,two,three,four";
var [a,b,c,d] = csvData.split(',');
//console.log(a);

//when we destructure- we want the variable name to be different...
//.. than the property name on that object.
//react router native .. link component.
var newUser = {
    n:'John',
    e:"John@org.com",
    a: 22
}
var {n:Name1,e:email1,a:age} = newUser;
console.log(Name1);

//Object destructering - to destructure a function parameters.
//not sure if you want to pass a particular argument..?
//worried about the order..?
fetchRepos({lang="All",minStars=0,maxStars=100,createdAfter,createdBefore}){
//as we are receiving an object in the function we can de-structer it ..using {}
//lang = lang || 'All';
}

//fetchRepos('JavaScript',null,null,new Date('01/01/2019'),null);
fetchRepos({
    lang:"JavaScript",
    //minStars:5, - can ignore
    //maxStars:20,
    createdAfter:new Date('01/01/2019').getTime(),
    createdBefore:new Date('01/02/2019').getTime()
});


//Array destructering - to destructure a function parameters.
//will write the old way and new way
function getUserData(player){
    return Promise.all( [getProfile(player) , getRepos(player)] )
    .then((data)=>{
        var playerProfile = data[0];
        var playerRepos = data[1];

        return{
            profile:playerProfile,
            repos: playerRepos
        }
    })
}

function getUserData2(player){
    return Promise.all( [getProfile(player) , getRepos(player)] )
    .then(   
        ([playerProfile,playerRepos]) =>  ( {playerProfile,playerRepos} )   
        )
}











// Objects in javascript

// const user ={
//     name : "Rhea",
//     age: 16,
//     "like this video" : true  // to write in a spacing used """
// }
//delete user.age;
// console.log(user["like this video"]);  // to access this => spacing



// Ouptut Question:  
const func = (function(a){
delete a;
return a;

})(5);
console.log(func);  // ouytput=> 5 because delete keyword can only be used when we want delete a property from the object and here the a is the local keyword


const property = "firstName"
const name = "Srishty Singh"

const user2 = {
    [property] : name, // to add the dynamic property is by wrapping []  so that we can see the firstName
    age: 14

}
console.log(user2.firstName);

// loop through each of its key and proint the values even the name of the keys , then we use for in loop
const user3 = {
    name : "Rhea",
    age: 16,
    "like this video" : true  // to write in a spacing used """
};

for(key in user3) {
    console.log(user3[key]); // acess the value of key []
    
}

// What is JSON.stringify and JSON.parse?  // common usecase -> storing it in a local storage
// It's a function in JavaScript that converts a JavaScript object into a JSON string.

const member = {
    name : 'arush',
    age: 26,
};
const strObj = JSON.stringify(member)
console.log(strObj);  // convert obj into string
console.log(JSON.parse(strObj)); // back convert into obj








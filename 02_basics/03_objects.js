// To declare an object in js there are two ways one is by literal and another is constructor
// singelton -- means when we create obj by using constructor that obj is one only and when we create obj by literal it is not become singleton

//object literals
// Object.create  it is used through constructor and which is singleton

const mySym = Symbol("key1")   // declare a symbol
const jsUser = {   // in obj there are key and values
    name : "Rhea",
    "fullname" : "Rheaa Nagarkoti",
    [mySym]: "mykey1",   
    age : 20,
    locatin : "Delhi",
    email :  "rhea@googe.com",   // here the "name" is a string but not witten as a string but computer treat them as a string
    isLoggedIn : false,
    lastLoginDays : ["friday", "sunday", "monday"]
    

}

// to access the object

// console.log(jsUser.age);  // we can acess them by using dot 

//another way to access the object

// console.log(jsUser["age"]) 
// console.log(jsUser.fullname)
// console.log(typeof jsUser.mySym)  // here it is used as a string not a symbol 
// to make them symbol  write them inside the [] brackets

// console.log(jsUser[mySym]) 

// jsUser.email = "srisht.nagarkoti@google.com"  // toc change the object value 
// console.log(jsUser.email);

// Object.freeze(jsUser)   // it fixed the value or freeze the value
// jsUser.email = "rhea.nagarkoti@google.com"  // toc change the object value 
// console.log(jsUser.email);


jsUser.greeting= function(){
    console.log(`hello from js user`)
}
jsUser.greetingTwo= function(){
    console.log(`hello from js user, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());









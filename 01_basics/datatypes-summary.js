// Primitive  --> 7 TYPES
// String , Number , Boolean , Null, Undefined, Symbol , BigInt 
// JS i dynamically typed language 
// EXAMPLE OF SYMBOL BELOW

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);   // NOTE : IF you pass the exact same value on symbol still their values are not same .

// BigInt example

const bigNumber = 288787392892829829289282n  // when you used 'n' at last it automatically turns to bigInt.


// Non Primitive or Reference Type
// ARRAYS, OBJECTS, FUNCTIONS 


const heros = ["batman", "shaktiman", "goku"]   // arrays 
// objects inside these {} braces.
    let myObj = {    // t store in variables
  name : "  Srishti",
  age : 24,
}

// functions

const myFunction= function(){   // here is to store inside the variables
 console.log("hello world");
}

// Note : To identify the data type used Typeof 
// bigint type of is undefined
// all the non primitive data types is type is basically the object , in function the data type is funtion only.

//  https://262.ecma-international.org/5.1/#sec-11.4.3 

// Short summary 

// return type of variables in Javascript :

// Primitive Datatypes
// Number => Number
// String => string 
// Boolean => Boolean
// null => Object
// undefined => undefined
// Symbol => Symbol
// BigInt => BigInt

// Non Primitive 

// Arrays => Object
// function => function
// object => object





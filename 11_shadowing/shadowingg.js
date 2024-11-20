// var vs let and const

// scope 
// {

// }

// fun hi (){  // functional scope 

// }
// {
//     var b =4;  
// }

// var a =5;   // global scope 
// // hence var is functional scope but  let and const are block scope
// console.log(a) // it is accessible 
// console.log(b);


// {
//     let c= 4
// }
//onsole.log(c) // cannot access 


// +++++++++++++ variable shadowing +++++++++++++++
// let and const in ES6 allows variable shadowing

// variable shadowing example ==>  while shadowing the variable it shoukld not cross the boundaries of the scope
function test (){
   // var a= "hello"  // we cannnot shadow let variable by using var --> illegal shadowing , but we can shadow var variable using let
    //let a = 'hi'  // global

    if(true){
       // let a = 'hello'; // block  this is shadow the above a 
        //console.log(a); 
    }
    //console.log(a);   // 
    
}
//test();


// we cannot re declare a variable by using let and const but we can redeclare var w same scope

//var a;
//var a;
// let a ;  => it throws it is already been declared
// let a;
// let a;{  // it works
//     let a;
// }





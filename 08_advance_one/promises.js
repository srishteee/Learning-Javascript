// creation of promises

//const promiseOne = new Promise(function(resolve,reject){

//    setTimeout(function(){
//     console.log(`async task is complete`)
//     resolve()
//    },1000)

// })

// // consume of a promise
// promiseOne.then(function(){   // .then has callback
//     console.log(`promise consumed`);
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//      console.log("async task 2");
//      resolve();
     
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
    
// })

// const promiseThree = new Promise(function(resolve,reject){

//     setTimeout(function(){
// resolve({username:"chai", email:"chai@chai.com"})
//     },1000)

// })

// promiseThree.then(function(user){
// console.log(user);

// })

// const promiseFour = new Promise(function(resolve,reject){
//    setTimeout(function(){
//    let error = false;
//    if(!error){
//     resolve({username: "rhea", password: "123"})
//    } else{
//     reject('ERROR: something went wrong')
//    }
//    },2000)
// })
// promiseFour
// .then((user)=>{

//     console.log(user);
//     return user.username
// })
// .then((users)=>{
// console.log(users)
// }) 
// .catch((err)=>{
// console.log(err);
// }) .finally(()=>{
//     console.log("the promise is either reject or resolve"); // it will run in all the cases
    
// })


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true;
    if(!error){
     resolve({username: "javascript", password: "1234"})
    } else{
     reject('ERROR: JS went wrong')
    }
    },1000)
 })

 async function consumePromiseFive() {
   try {
    const response= await promiseFive  // promise is eventual completion obj to consume like this only
    console.log(response);
   } catch(error) {
    console.log(error);
   }
 }
consumePromiseFive()

// async function getAllUsers(){
 
//    try {
//     const response= await fetch(''https://jsonplaceholder.typicode.com/users'')
//    const data =await response.json()
//   console.log(data);
    
//    } catch (error) {
//     console.log("error");
    
    
//    }
  
// }
// getAllUsers()


// with then and catch


fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()

})
.then((data)=>{
console.log(data);

})
.catch((err)=>{
console.log(err);

})



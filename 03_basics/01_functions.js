// console.log("R");
// console.log("h");
// console.log("e");
// console.log("a");

function sayMyName (){
console.log("R");
console.log("h");
console.log("e");
console.log("a");

}
//sayMyName();   // sayMyName is a reference of the function but here we excute the or call the function

// function addTwoNumbers (number1,number2){   // number1 and number2 are parameters

//     console.log(number1+number2);

// }

// addTwoNumbers(3,null);   // here 3 and 4 are arguements



function addTwoNumbers (number1,number2){   // number1 and number2 are parameters

        // let result = number1+number2
        // return result   // after return nothing can print

        return number1 + number2
    
    }
    
    const result = addTwoNumbers(3,5)

    //console.log("Result:", result);   // it gives undefined

function loginUserMessage (username="rhea") {   // here rhea is a default vaue it will print automatically 

  if(!username){
    console.log("please enter a username");
    return
  }
  return `${username} just logged in`
}

 //console.log(loginUserMessage("sam"))  // it gives undefined

//  function calculateCartPrice (val1,val2,...num1){  // ... is rest operator and it gives value in array
//     return num1
//  }
 //console.log(calculateCartPrice(200,400,500))  // to solve this issue we use rest operator

 const user= {
 username : "rhea",
 price: 199
 }

 // here to pass the above object in a function

 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
//  handleObject(user)
handleObject({
    username: "srish",
    price:200
})

const myNewArray = [200,300,500,600]

function returnSecondValue(getArray){
return getArray[2]
}

console.log(returnSecondValue(myNewArray))



   





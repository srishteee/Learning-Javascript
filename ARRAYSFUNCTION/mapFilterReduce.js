// map , filter , reduce => methods on array
// whatb is map?

//  map takes a call back function and the fn takes  three things => current element so that iterate through all the element, index , actual array(whole array)

// const nums = [1,2,3,4]

// const multiplyThree = nums.map((num,index,arr)=>{
//     return num*3  // it gives complete new array whcih is multpy by three
// });

// console.log(multiplyThree);


// what is filter ?
// filter method takes  each element in an array and it applies  conditional statement against it if condition is true it will push the output array , it return which fullfill the provided crirteria only

// const nums = [1,2,3,4];

// const moreThanTwo = nums.filter((num,i,arr)=>{
//     return num >2; // here we put condition 

// })
// console.log(moreThanTwo);


// reduce?
// a reduce method reduces an array of value down to just 1 value , The reduce() method executes a reducer function on each element of the array and returns a single output value.


const nums = [1,2,3,4];

const sum= nums.reduce((acc, curr, index,arr)=>{
return acc+curr;
},0)
console.log(sum);









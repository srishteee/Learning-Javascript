// pollyfilss for map

//Array.map((num,i ,arr)=>{})
    //custom map fn
// Array.prototype.myMap=function (cb) {  // creating a new mymap method in js and it accept callback fn as an argument which applies to all array in js
//     let temp =[];
//     for (let i = 0; i < this.length; i++) {
//       temp.push(cb(this[i],i,this));  // calling the call bck fn with three arguements
        
//     }
//     return temp;
// };



// Array.prototype.newMap = function (cb) {
//     let temp1 =[];

//     for (let i = 0; i < this.length; i++) {
//        temp1.push(cb(this[i], i, this))
        
//     }
//     return temp1;
// };

//implementation 
// const nums = [1,2,3,4]

// const multiplyThree = nums.newMap((num,index,arr)=>{
//     return num*3  // it gives complete new array whcih is multpy by three
// });

// console.log(multiplyThree);

// Notes : Map return each and every values and modify accordingly but filter only return those value which satisfies the condition



// +++++++ polyfils for filter  +++++++
// this is an array  and this[i] is a current arrray
//Array.prototype.myFilter = function(cb){
//     let temp = [];

//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i],i,this))  temp.push(this[i])
       
        
//     }
//     return temp 
// }

// const nums = [1,2,3,4];

// const moreThanTwo = nums.filter((num,i,arr)=>{
//     return num >2; // here we put condition 

// })
// console.log(moreThanTwo);





// +++++ polyfills for reduce+++++++
// it takes two thinge one is call back and other is the initial value call back has the accumulator , the current value and the index and the array
// arr.reduce((acc,curr,i,arr)=>{},initial value)

Array.prototype.myReduce = function (cb,initialValue) {
 var accumulator =  initialValue;

 for (let i = 0; i < this.length; i++) {

    // if the initial value is not given then it takes the array first value as the initial value and the second value as the current value
    accumulator = accumulator ? cb(accumulator,this[i],i,this): this[i];  
 }

return accumulator;

};

const nums = [1,2,3,4];

const sum= nums.reduce((acc, curr, index,arr)=>{
return acc+curr;
},0)
console.log(sum);





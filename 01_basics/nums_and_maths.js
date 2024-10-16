const score = 500;
console.log(score.toString().length); // convert into string 
console.log(score.toFixed(2));   // it gives the value in ddecimal basically used when the value is large 

// const balance = new Number (10);   // this is how you explicitly define the data type 
// console.log(balance)

// const School = new String ("DAV");
// console.log(School)

// To convert number from string there are many ways :
// Number()
// parseFloat()
// parseInt()
// valueOf

const number = 1123.9989

console.log( number.toPrecision(3)) ;  // it gives the precise value also take a look before the decimal

const hundereds= 100000;
console.log( hundereds.toLocaleString());  


// ++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))   // abs stands for absolute value which chnage the negative value to the positive ones.
// console.log(Math.round(4.5))  // it gives the roundoff value 
// console.log(Math.ceil(4.2))  // to control the value , ceil means the top value here that is 5
// console.log(Math.floor(4.2))// it take the loweer value
// console.log(Math.min(3,4,1,2,0))  // to find the minimum value
// console.log(Math.max(4,6,17,90))  // to find macximum value

// where to use ax value we used mostly on random

// console.log(Math.random()) // it always gives the value between 0 to 1
console.log(Math.floor(Math.random()*10) +1);  // it shift the value whenever you multiply by 10 to avaoid the os we add 1 

// formula to define min and max
const min =10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min +1))+min);
 
// array specific loops
// for of loop

// ["","","",]
// [{},{},{}]  


// const arr [1,2,3,4,5]
// for (const key in object) {        // here key refers to the variables (Odeclare the variables)and object refers where you want to put the loop 



// }
const arr =[1, 2, 3, 4, 5]
for (const num in arr) {

    console.log(num)   
}


const greeting ="hello world"

for (const greet of greeting) {
    console.log(`each char is ${greet}`)
    
}

const name = "rhea"
for (const num of name) {
console.log(   `${num}`)    
}
//MAPS
const map = new Map()   // map itself an object in js
map.set('IN',"India")
map.set('FR',"France")
map.set('UK',"United Kingdom")
console.log(map)  // map gives output in key and values pair

for (const [key,values ]of map) {   //if you want sepearate them use [] this it is kinda syntax
   console.log(`${key}  = ${values}`) // it gives output in an array 
}


const myObj={
    game1: 'FREE FIRE',
    game2: 'PUBG'
}
for (const [key,values] of game2) {
    console.log(`${key} ${values}`)
}   // used forin loop isntead of for of loop while iterating the object , forof iterate in array easily
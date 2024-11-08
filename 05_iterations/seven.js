const myNumers = [1,2,3,4,5,6,7,8,9,10]

//const newNums= myNumers.map((num)=> num+10)   // it is also give the call back fn but it automatically return the values
// in filter only true is return and in map everything is return


//chaining where you use more than 2-3 methods together

const newNums= myNumers
            .map((num)=>num*10)  // first implement this
            .map((num)=>num+1)  // then add the value from first map
            .filter((num)=>num>=40)  // then this will run

console.log(newNums)
// array

const myArr = [1,2,3,4]
// const myHeros = ["shaktiman", "batman"]
// console.log(myArr[2]); 
// console.log(myHeros[1])


// Array Methods

// myArr.push(9)   // to add
// myArr.push(11)
// myArr.pop() // to remove the last line
// console.log(myArr);



// myArr.unshift(9)  // it gives value to the start
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(19))  // it gives output in boolean , it means whetther 19 is include which is presnet or not in the above array

// console.log(myArr.indexOf(3)) // it gives the value that the index if index is not there then it gives -1 as a output

const newArr = myArr.join()  // The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).

// console.log(myArr);
// console.log(typeof newArr)
// console.log(newArr)

// slice , splice methods
// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B", myArr);

const myn1 = myArr.splice(1,3)  // splice method manipulate the original array whereas slice is not

console.log(myn1);  

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]


console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


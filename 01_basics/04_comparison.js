// basc comparison between same data types either they are no's or strings
// console.log(2>1);
// console.log(2==2);
// console.log(2<1);
// console.log(2!=1);
// console.log(2>=1);

// when we need to compaare different data types 
// console.log("2" > 1);  
// console.log("02"> 1);  // both are gving "true" output because it converts them into no's but  try to compare same data type sometimes it is  not gives prdictable solutions

// console.log(null > 0);  // it give "false" output bec null is empty
// console.log(null == 0);  // it give "false" output bec null is empty
// console.log(null >= 0);  // it gives "true" output because the reason is that == and comparison works differently, comparisons convert null to a number , treating it as a 0.


console.log(undefined > 0); 
console.log(undefined == 0);  
console.log(undefined >= 0);  // pls avoid these type of coversions

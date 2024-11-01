//var c= 300; // global scope
let a =300;
if(true){
    let a = 10;
    const b=20;
    //var c = 30;  // if you not declare still getting the same problem
}
 console.log(a);
// console.log(b);
// console.log(c);   // it is accesible outside the block that is why not good to use var

// whenever we check the global scope in vscde via node this scoe is different from the browser(global) scope 
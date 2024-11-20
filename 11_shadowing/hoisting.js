//console.log(count);
//let  count = 1;  // it is in temporal dead zone => it is a time between the declaration and initialization of let & const varaibles



// what will be the console log of a? below

function abc(){

    console.log(a,b,c)
   const c= 30;
   //let b = 20;
    var a = 10;
    // it is undefined => it is initialize the fn not intialize the variable 
}
abc();
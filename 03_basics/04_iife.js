// Immediately Invoked Function Expressions (IIFE)


(function chai (){  // this is called named iife

    console.log(`DB CONNECTED`)
}) ();   // it is imp to add semicolon here which means to end the iife fn so that the below next fn can run

// () first one is for where fn definiton () this one i for excution call
// we were using iife because when the values from global can pollute it will 
// global scope   pollution se problem to rectify those prblem whe use iffe whatever variable or declarations we can also use iife in arrow fns
(function coffe (){
console.log(   `db connected two`)
}) ();

((name)=>{  // unnamed iife
    console.log(`DB connected three ${name}`)
}) ("rheaah")
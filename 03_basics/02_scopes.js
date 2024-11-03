//var c= 300; // global scope
let a =300;
if(true){
    let a = 10;
    const b=20;
    //var c = 30;  // if you not declare still getting the same problem
}
 //console.log(a);
// console.log(b);
// console.log(c);   // it is accesible outside the block that is why not good to use var

// whenever we check the global scope in vscde via node this scoe is different from the browser(global) scope 

//++++++   function inside functionsss

function one (){
    const username= "rhea"

    function two (){   // two fn can access the one 
        const website = "youtube"
       // console.log(username)
        
    }

    //console.log(website)
   // two()
}
//one()


if (true) {
  const username ="rheaaa"
  if(username==="rheaaa"){
    const website = "  youtube"
  
    //console.log(username+website)
} 
//console.log(website) 
}
//console.log(username)


/// //      +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++      //
addone(5)
function addone (num){
    return num+1;
}

addTwo(5)  // it gives error bec it store in variable hold in variable and this cncept is hoisting 
const addTwo = function(num){
    return num +2;
}

const coding = ["js","ruby","python","java","cpp"]
// coding.forEach(  function(item){
//     console.log(item)
// })    //  foreach throws callback fn and callback fn does not has their name you 

// coding.forEach((val)=>{  // call back arrow fn 
//     console.log(val)
// })


// function printMe(item){
// console.log(item)
// }

// coding.forEach(printMe)  // here we pass the fn always give the reference not executing the fn


// coding.forEach((item,index,array)=>{
//     console.log(item,array,index)
// })   // foreach callback fnhas  parameter access like index and and arr whole 

const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    
]
myCoding.forEach((item)=>{   // you name the whole object as item while looping and then every iteration it takes as item and give it back

    console.log(item.languageName,item.languageFileName);
})


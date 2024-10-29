// const tinderUser = new Object()  // this is singleton object

const tinderUser = {}   // both give empty object , non singleton

 tinderUser.id= "123abc"
 tinderUser.name="sam"
 tinderUser.isLoggedIn= false
// console.log(tinderUser);

const regularUser = {
    email : "som@gmail.com",
    fullname: {

        userfullname:{
     firstname : "rhea",
     lastname : "nagarkoti"
        }

    }
}

//console.log(regularUser.fullname.userfullname);

// combine the obejcts

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
   // the empty parantesis is a optional which returns the value as it is in a combine manner  ,, empty obj is target and another one is source
//+++++++++++++++++++++++++++++++++
   // mainly used the below syntax for combing the object
   const obj3 = {...obj1,...obj2}
//    console.log(obj3) 
   
   //++++++++++++ when the values are coming from the datatbase  +++++++++++++++

   const users = [
    {
        id: 1,
        email : "h@gmail.com"
    },
    {
        id: 1,
        email : "h@gmail.com"
    },
    {
        id: 1,
        email : "h@gmail.com"
    },
    {
        id: 1,
        email : "h@gmail.com"
    }
   ]

   users[1].email
//    console.log(tinderUser)
//    console.log(Object.keys(tinderUser))   // it gives the arrray 
//    console.log(Object.values(tinderUser))
//    console.log(Object.entries(tinderUser))  // array under array first isy another is valuue

//    console.log(tinderUser.hasOwnProperty('isLogged'))  // it gives resut in boolean


     // +++++++++++++++++++++ DESTRUCTURING +++++++++++++++++++  //

  
     const course = {
      coursename : "js course",
      price : "999",
      courseInstructor: "rhea"
     }

    //  connsole.log(course.courseInstructor)  

    const {courseInstructor: instructor} = course  // we need to extract value from course object and inside the {} you need to add the value which you want to extract and you can also change the value this is know as destructuring the object
    console.log(instructor);



// {
//     "name" : "rhea",
//     "coursename": "js",
//     "price": "free"
// }
 
// [

//     {},
//     {},
//     {}
// ]

    





     







     
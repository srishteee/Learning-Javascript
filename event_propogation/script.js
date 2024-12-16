// Event propogation in js => when and where event is executed

// what is event bubbling? => bottom to top

// taking the elements from the html
// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// event listener 

// div.addEventListener("click", function () {
//     alert("div clicked");
// });

// // form.addEventListener("click", function () {
// //     alert("form clicked");
// // });

// // button.addEventListener("click", function () {
// //     alert("button clicked");
// // });


// event.currentTarget vs event.target vs this.target
// BY DEFAULT EVENT BUBLING PROCESS IS HAPPEN BUT 
// div.addEventListener("click", func);
// button.addEventListener("click", func);
// form.addEventListener("click", func);

// function func(event){
//     alert("currentTarget = " + 
//         event.currentTarget.tagName +  
//         ", target = "+
//         event.target.tagName +  // it gives the main target i.e biutton whenever you click
//         ", this =" +
//         this.tagName  // it works as currentTarget
//     );   
// }

// WHAT IS EVENT CAPTURING / EVENT TRICKLING :

// div.addEventListener("click", function () {
//        alert("div clicked");
//      },{
//         capture: true,
//      });

//      form.addEventListener("click", function () {
//            alert("form clicked");
//         },{
//             capture: true,
//          });
//          form.addEventListener("click", function () {
//             alert("button clicked");
//          },{
//              capture: true,
//           });
 

          // what is event delegation?
          // Event Delegation is basically a pattern to handle events efficiently. 
          //Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .
          //target property of the event object.


          document.querySelector(".products").addEventListener("click", (event)=>{
            console.log(event);
            
          })
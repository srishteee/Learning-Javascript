

// Async code , callbacks

// console.log("start");
// // perefect example of callback hell 
// function importantAction (username,cb){
//     setTimeout(() => {
//        cb(`subscribe to ${username}`);
        
//     }, 500);
// }

// function shareTheVideo (video,cb){
//     setTimeout(() => {
//        cb(`share  to ${video}`);
        
//     }, 1000);
// }

// function likeTheVideo(like,cb) {
//     setTimeout(() => {
//         cb(`like the video ${like}`)
//     }, 300);
// }
// importantAction('rheaaaaa',function (message) {
//     console.log(message); 
//     shareTheVideo("js video", (action)=>{
//         console.log(action);
//         likeTheVideo("like it pls ", (act)=>{
//             console.log(act);
            
//         })
        
//     });
    
//})  // when we pass a fn inside the another fn then it takes a callback
//console.log(message); // it gives undefined as a output to get the message on the console we use callbacks
//console.log("stops");

// Promises come into the picture for rectify the callback hell

// const sub = new Promise ((resolve,reject)=>{
// setTimeout(() => {
//     const result = true;
//     if(result) resolve("hello from promise");
//     else reject(new Error("this is error"))
// }, 2000);
// })

// sub.then((res)=>{
// console.log(res);

// }).catch((er)=>{
//     console.log(er);
    
// })


const sub =Promise.resolve("hello from promise");
console.log(sub);
sub.then((res)=>{
    console.log(res);
    
})


 
function myPromise(){

    const mePromise= new Promise (function(resolve,reject){
      
     const URL = "https://randomuser.me/api/"
     fetch(URL)
     .then((response)=>{
         return response.json();
     })
     .then((data)=>{
 
     resolve(data);
    
     })
 
    })
    return mePromise
 
 
 }
 myPromise().then((data)=>{
     console.log(data);
 }
 )
 // myPromise().then((data) => {
 //     console.log(data);
 //   })
 
 
 // do with async await
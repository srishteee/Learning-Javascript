async function fetchData(){
    try{
      const url1= await fetch('https://randomuser.me/api/')
      const data1 = await url1.json();
      
      
      const url2= await fetch('https://randomuser.me/api/')
      const data2 = await url2.json();
      
      //console.log(data1);
      // merge two data
      const mergedData = { ...data1, ...data2 };
      console.log("Merged Data:", mergedData);
    } catch(er){
      console.log(er)
    }
     
   }
   fetchData();
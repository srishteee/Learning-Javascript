// for loop

for (let i = 0; i <= 10; i++) {
    const element = i
    if(element==5){
       // console.log( `5 is detected`)
        break; // this code is terminate here after 5 
    }
    //console.log(element)
    
}


for (let i = 0; i <= 10; i++) {
    const element = i
    if(element==5){
       // console.log( `5 is detected`)
        continue // this code print 5 but will continue the rest
    }
    //console.log(element)
    
}

{
    for (let i = 1; i <= 10; i++) {
        console.log(`outer loop value : ${i}`);
        for (let j = 1; j < 10 ;j++) {
            //console.log(`inner loop value : ${j} and inner loop ${i}`);
            
            console.log(i +'*'+j+ '=' +i*j);
        }
        
    }
}










// let array = [`batman, spiderman,shaktiman`]

// for (let j = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
    
// }

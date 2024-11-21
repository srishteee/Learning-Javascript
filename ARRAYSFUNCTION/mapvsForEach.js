// difference betweeen map and forEach
 // they both are array functions (methods) to loop through the items in an array

 const arr = [2,3,4,5,6]

 const mapResult = arr.map((arr)=>{
  return arr+2; // IT RETURN NEW ARRAY WITH ALL THE ITEMS +2
 }).filter()

 const forEachResult = arr.forEach((arr, i) => {
    arr[i] = arr + 2;
});
 console.log(mapResult);  // THIS WILL PRPOVIDE NEW ARRAY
 console.log(forEachResult); 



 // The forEach() and map() methods in JavaScript are used to iterate over arrays, 
 //but they serve different purposes. forEach() executes a provided function once for each array element without returning a new array, 
 //while map() transforms elements and returns a new array.
 
 //The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here. 
// With the map() method, we can chain other methods like, reduce(),sort() etc.
// It is not executed for empty elements.=> for each
//It does not change the original array. => map

    
// Which is faster: forEach() or map()?
//Performance differences are generally minimal, 
//but map() can be slightly faster when transformations are needed because
// it is optimized for returning new arrays. However, the choice should be based on functionality rather than speed.


// Is map() always better than forEach()?
// Not necessarily. map() is better when you need a new array of transformed elements, 
// while forEach() is suitable for side effects or actions without returning a result.
// Dates

let myDate = new Date ();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate) // date is object in js

let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("2024-03-15")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myDate.getTime())  // it gives the values in milliseconds

// to convert from milliseconds to seconds:-
console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default', {

    weekday: "long",
}
)
let obj = {
    name : "rhea"
};

function sayHello(age , profession){

    return "Hello "+ this.name + " is"  + age +profession;
}

//console.log(sayHello.call(obj,24))
// console.log(sayHello.apply(obj, [24, 'sde']));   // apply always gives the properties as a array 


const bindFunc = sayHello.bind(obj);  // it provides reusable function
console.log(bindFunc(24,"Software engineer"))
console.log(bindFunc(22,"Software engineer"))
console.log(bindFunc(23,"Software engineer"))

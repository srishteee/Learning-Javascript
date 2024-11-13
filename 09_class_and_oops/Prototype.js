//let myName = "Srishti        "
// let myChannel = "codewSrish       "

// console.log(myName.trueLength()); we want this method to apply on all the strings truelength method


let myHeros = ["thor","spriderman"]

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderMan: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.srishti = function(){
    console.log(`srishti is ppresent`);
    
}

Array.prototype.heysrish= function () {   // only give access to arrays only
    console.log("present in arrays only");
    
}

heroPower.srishti()
myHeros.srishti()
myHeros.heysrish()









// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern way

Object.setPrototypeOf(TeachingSupport,Teacher)
    let anotherUsername= "srishandRhe"

    String.prototype.trueLength= function(){
        //console.log(`${this}`);
        console.log(`true length is ${this.trim().length}`);   
    }
    anotherUsername.trueLength()
    "rhea".trueLength()
    "sonpapdi".trueLength()
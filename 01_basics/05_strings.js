const name = " Rhea"  


// console.log(name  +  repoCount  + "value");   // this is the old way to concatenate


console.log(`Hello my name is ${name} and my repo is  ${repoCount}`);   // this is the modern way and also known as string interpolation 


// another way to declare string by new keyword 

const gameName = new String ('Temple Run');

console.log(gameName[0]);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   rhea   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rhea.com/rhea%20nagarkoti"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
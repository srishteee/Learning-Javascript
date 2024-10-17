const marvelHeroes = ["Ironman", "Thor", " Spiderman"]
const dcHeroes = ["superman", "batman", "flash"]

//marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes) // push add the array inside the array

// const allHeroes = marvelHeroes.concat(dcHeroes)  // concat provide a new array 
// console.log(allHeroes)


// spread operator

const allNewHeroes = [...marvelHeroes, ...dcHeroes]   // we can also use spread operator also 
console.log(allNewHeroes);

const another_array = [1,2,3,[4,5,6],7,[6,7],8,[9,0]]   // array insides arrays 

const real_another_array = another_array.flat(Infinity)   // flat can help to rectify the above problem as array isndie array and also we need to provide the specific depth or else we can use infinity
console.log(real_another_array)




console.log(Array.isArray("Rhea"))   // check it is array or not

console.log(Array.from("Rhea"))  // convert it o array  by using "from"
console.log(Array.from({name: "Rhea"}))   // it cannot convert the key and value therefore it gives the empty array as a output

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))   // of gives the set of arrays


let akshay= 200;
let rhea = 300;
console.log(Array.call(rhea)) 




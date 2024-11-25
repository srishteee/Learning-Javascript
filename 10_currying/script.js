// Currying in js

function f(a){
    return function (b){
return `${a} ${b}` ;

    }
}
console.log(f(5)(6));


// Question 1 - sum (2)(6)(1)

// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(2,6,1));
// using currying solve 
function sum(a) {
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(2)(6)(1));



// Question2 - evaluate ("sum")(4)(2) => 6
// evaluate ("multiply")(4)(2) => 8
// evaluate ("divide")(4)(2) => 2
// evaluate ("substract")(4)(2) => 2



function evaluate(operation) {

    return function(a){
        return function(b){
            if(operation == 'sum') return a + b;
            else if(operation == 'multiply') return a*b;
            else if(operation == 'divide') return a/b;
            else if(operation == 'substract') return a-b;
            else return "Invalid Opeartion";
        };
    }
    
}
console.log(evaluate('sum')(4)(2));



// Question 3 Infinite currying   -> sum(1)(2)(3)....(n)

function add(a){
   return function (b){
     // check if there any more params or not  if there is value or not otherwise it will return the same value
     if(b) return add(a + b);
     return a;
   }
}



console.log(add(5)(3)(2)()());

// console.log(add(4)(2)(4)(5));







# Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

# Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures by immediately returning their inner functions simultaneously.

#  Why should currying be used?
Following are the reasons why currying is good :

✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.

# How does currying work?
Currying is a function that takes multiple arguments as input. It transform the function into a number of functions where every function will accept one argument.

/*Simple function*/ 
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(1,2 ,3)); // 6

/* Curried Function */
const addCurry = (a) => { // takes one argument
    return (b)=>{                 //takes second argument
        return (c)=>{             //takes third argument
            return a+b+c
        }
    }
}
console.log(addCurry(1)(2)(3)); //6

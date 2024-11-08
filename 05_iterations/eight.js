const myNums = [1,2,3]  // this is currentvalue

// const myTotal = myNums.reduce(function(accumulator,currentvalue){    // it gives two params i.e. accumulator and currentvalue at initial accumulaltor

//                         console.log(`acc: ${accumulator} and curr val : ${currentvalue}`)
//                         return accumulator + currentvalue 
//                     },3)  // here we give the value of accumulator starting value we can give any of the value 


// using arrow fn
const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName : "js course",
        price: "2999"
    },
    {
        itemName : "python course",
        price: "4999"
    },
    {
        itemName : "mobile course",
        price: "5999"
    },
    {
        itemName : "data science course",
        price: "9999"
    },
]

const priceToPay= shoppingCart.reduce((acc,item)=>acc+ item.
price,0)

console.log(priceToPay)
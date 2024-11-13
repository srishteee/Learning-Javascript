function multiplyBy5(num){
return num*5
}
multiplyBy5.power=2
console.log(multiplyBy5(4));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username,score){
    this.username=username;  // this refers to the current context
    this.score=score
}



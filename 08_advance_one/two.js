async function getUrl(){
    try {
      const response= await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      const getAllNames = data.map((value,index)=>{
        return value.username
        
      })
      console.log(getAllNames);
      
      console.log(data[0].username)
    } catch(err){
      console.log(err)
    }
    
  }
  getUrl()












  /// ++++++++++++calll




  // call 
function setUsername (username) {
    //complex db call
    this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this,username) // here why we did this, because if we use only setUsername(username) and passed only username it will not print value of username because technically it only send the referece and called,
    //for calling the username we need to call method and pass this along with username .call() hold the referece
    this.email= email
this.password = password
}

const user = new createUser("ashish", "ashish@cb.com", "123"); // new key call prototype because we create new object and then it will go constructor afte that it will call value with the help of this.
console.log(user);
yqb-gahc-xxq

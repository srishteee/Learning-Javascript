const myObject = {
    js :"javascript",
    cpp: "c++",
    rb: "ruby",
    swift : "swift by apple "
}
// for IN loop 
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

// for in loop on arrays 

const programming = ["js","rb","py","c++","java"]

for (const key in programming) {
    //console.log(key)  // it gives key only array key starts from 0 
    //console.log(programming[key])
}


const map = new Map()   // map itself an object in js
map.set('IN',"India")
map.set('FR',"France")
map.set('UK',"United Kingdom")

for (const key in map) {
    console.log(key)   // it is not run because in forein loop we cannot iterate in map 
}
// Debouncing  fn by library loadash and throttling in javascript

// Ques 1 create a button ui and add debounce as follows :
// --> Show "button Pressed <X> Times" every time button is pressed
// --> Increase "Triggerred <Y> Times" count after 800ms of debounce


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");


// variables to display the count 
var pressedCount = 0;
var triggerCount = 0;

const throttleCount = _.throttle(()=>{
    count.innerHTML= ++triggerCount;
},800)

const debouncedCount = _.debounce(()=>{
    
},800);

btn.addEventListener('click', ()=>{
    btnPress.innerHTML = ++pressedCount;
  throttleCount();
})



// create debounce () polyfill implementation


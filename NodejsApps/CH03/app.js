//const myModule = require("./myModule");

const { anything, increment, decrement, getCount } = require("./myModule");

// console.log(myModule.anything);

// myModule.increment();
// myModule.increment();
// myModule.increment();
// myModule.increment();

// myModule.decrement();

// console.log(`the count value is ${myModule.getCount()}`);

console.log(anything);
increment();
increment();
increment();
increment();
decrement();

console.log(`the count value is ${getCount()}`);

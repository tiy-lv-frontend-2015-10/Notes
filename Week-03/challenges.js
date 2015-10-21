// write a function randomInRange(a,b)
// that returns a random number between a and b
//
// note: Math.random() returns a float between 0 and 1

function randomInRange(a,b) {

}

var x = randomInRange(5,100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25,30)
console.assert(y >= -25 && y <= 30)





// write a method names() 
// which takes a string of
// comma-separated names 
// (first and last) and then 
// returns an object where each
// firstname is a key, and each 
// lastname is a value
// 
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(str) {

}

var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")
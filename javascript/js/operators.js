//Arithmetric operators
let x = 10
let y = 50

let z = x + y; //addition
let j = y - x; //subtraction
let h = y * x; //multiplication
let i = y / x; //division
let k = x % 2; //modulus
console.log(z)
console.log(j)
console.log(h)
console.log(i)
console.log(k)

// Comparison operators
console.log(y>x) // greater than
console.log(x<y) // less than
console.log(x==y) // equal to or identical
console.log(x===y) // also means equal to 
console.log(x>=y) // greater than or equal to
console.log(x<=y) // less than or equal to

// Coersion
let q = "5"
// Manual coersion
x = String(x)
console.log(typeof(x))
q = Number(q)
console.log(typeof(q))

console.log("THIS IS FOR COMPARISON EQUAL TOs")
// == performs coersion before comparison 
// === compares directly
console.log("5" == 5) // == performs coersion before comparison
console.log("5" === 5) // === compares directly 

console.log(5 == 5)
console.log(5 === 5)
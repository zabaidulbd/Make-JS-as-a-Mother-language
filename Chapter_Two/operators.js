// arithmetic operators.....

let num1 = 11;
let num2 = 12;

// pre incremental....post incremental........

console.log(num1++);
console.log(++num1);
console.log(num2--);
console.log(--num2);

// assignment operators......

let a = 5;
let b = 6;

a = a + b;
console.log("from line 19", a);

a += b;

console.log("from line 23", a);

a = a - b;

console.log(a);

a -= b;
console.log(a);

let a1 = 10;

let b1 = 20;

a1 *= b1;
console.log(a1);

a1 /= b1;
console.log(a1);

// comparison operators....comparison operator return boolean....

let comNum1 = 10;
let comNum2 = 20;

console.log(a == b);  // don't check type only check value.
console.log(a !== b);

// below check type and value ...
a = '10';
console.log( a === b);
console.log( a !=== b);

console.log( a < b);
console.log( a > b);
console.log( a >= b);
console.log( a <= b);


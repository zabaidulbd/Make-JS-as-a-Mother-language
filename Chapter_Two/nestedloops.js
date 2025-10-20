// nested loops.....

// for (let i = 1; i <= 5; i++) {
//   let result = "";
//   for (let j = i; j <= 5; j++) {
//     result += j;
//   }
//   console.log(result);
// }

// for (let a = 1; a <= 5; a++) {
//   let total = "";
//   for (let b = 1; b <= 5; b++) {
//     total += b;
//   }
//   console.log(total);
// }

for (let x = 1; x <= 5; x++) {
  let myResult = "";

  for (y = 1; y <= x; y++) {
    myResult += y;
  }
  console.log(myResult);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

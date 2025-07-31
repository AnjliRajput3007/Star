// let size = 6;

// for (let i = 0; i < size; i++) {
//   let row = "";
//   for (let j = 0; j < size; j++) {
//     row += " * ";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= n -i; j++) {
//     row += " ";
//   }

//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let row = "";

//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }

//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// let n = 5; // You can change the value of n

// for (let i = 1; i <= n; i++) {
//   // for print row
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (i === 1 || i === n || j === 1 || j === n) {
//       // if i ===1  then it print * in first row & column . if i === 2 then second condition of column works means j waali condition work kregi  ek satr print krengi then condtion check hogi jb star me j === 2 hua to  space aayega kyuki condition ho gyi false  or jb condition me j === n hua to border pe * print hoga yhi  loop chlega or hollw square bn jaayega with 5 rows

//       row += "* ";
//     } else {
//       row += "  ";
//     }
//   }
//   console.log(row);
// }


let n = 7; // Size of the pattern (odd number preferred)

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j === n + 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}


// i == j        → left-to-right diagonal ( \ )
// i + j == n+1  → right-to-left diagonal ( / )

//*Circle R
// let r;
// do {
//     r =Number( prompt("Enter r please"));
    
// } while (isNaN(r) || r<=0);
// let result = "Total Area is " + Math.PI * r * r;
// alert(result);



//&Sqr
// let sq;
// let result2;

// do {
//   sq = Number(prompt("Enter number please"));
// } while (isNaN(sq));

// if (sq >= 0) {
//   result2 = "Square root is " + Math.sqrt(sq);
// } else {
//   result2 = "Square root of absolute value is " + Math.sqrt(Math.abs(sq));
// }

// alert(result2);


//! Cos angel   floating-point precision in JavaScript.
// let angle;
// let result3;

// do {
//   angle = Number(prompt("Enter angle in degrees:"));
// } while (isNaN(angle) || angle < 0);

// let radians = (angle * Math.PI) / 180;
// let cosValue = Math.cos(radians);

// //^ solve floating point problem
// if (Math.abs(cosValue) < 1e-10) {
//   cosValue = 0;
// }

// result3 = "Cos of angle is " + cosValue.toPrecision(5);
// alert(result3);

//~ odd nums with rang
let mx;
let mn;

function findOdd(x, y) {
    console.log("Odd numbers")
    mx = Math.max(x, y);
    mn = Math.min(x, y);
    for (let i = mn; i <= mx; i++){
        if (i % 2 != 0)
            console.log(i + "");
    }
    
}
findOdd(10, 3);

//^Random Tip
let jsTips = [
  "Use 'let' and 'const' instead of 'var' for better scoping.",
  "Always declare variables before using them to avoid hoisting issues.",
  "Use === instead of == to avoid type coercion bugs.",
  "Arrow functions provide a shorter syntax and lexically bind 'this'.",
  "Template literals (`) make string concatenation easier and cleaner.",
  "Use array methods like map, filter, and reduce for cleaner code.",
  "Always handle asynchronous code with Promises or async/await.",
  "Use strict mode ('use strict') to catch common mistakes.",
  "Objects and arrays are reference types, so be careful when copying them.",
  "Console.log is useful for debugging, but remove it in production code.",
];

let ranNum = Math.floor((Math.random() * 100) / jsTips.length);
console.log(jsTips[ranNum]);


//!  Exeprission  Function constructor  see html

//&  
let students = [
  { Name: "Abanoub", Degree: 85 },
  { Name: "Mona", Degree: 92 },
  { Name: "Omar", Degree: 78 },
  { Name: "Sara", Degree: 88 },
  { Name: "Ali", Degree: 95 },
  { Name: "Laila", Degree: 80 },
  { Name: "Mina", Degree: 50 },
  { Name: "Nour", Degree: 39 },
  { Name: "Ahmed", Degree: 76 },
  { Name: "Yasmin", Degree: 51 },
];

//90---100
console.log("********More than 90 Less than 100*****************");
let nnam = (students.find((st) => st.Degree >= 90 && st.Degree <= 100));
console.log(nnam.Name);

//60> degrees
console.log("Less than 60*****************")
let nms = students.filter((st) => st.Degree < 60);
for (i in nms) {
    console.log(nms[i].Name)
}
//Push element in array
console.log("/********* Add user:")
let person = {
    Name: "AddedPush",
    Degree: 99
};
students.push(person);
for (i in students) {
    console.log(students[i].Name);
}
console.log("/********* Remove user:");
students.pop();
console.log(students);
console.log(typeof students);



//& string1.localeCompare(string2)  to sort alph

console.log("/********* array after sort:");
 students.sort((a, b) => a.Name.localeCompare(b.Name));
students.forEach((st) => console.log(st.Name));


//*Use splice() function to add 2 new students after the second element of the array [Bonus].
students.splice(
  2, 
  0, 
  { Name: "Hema", Degree: 88 },
  { Name: "Afsha", Degree: 91 },
);
console.log("-------------student after add 2 person /n");
students.forEach((st) => console.log(st.Name));

//^ Remove 1 after thired element
console.log("-------------student after remove th4 person /n");
students.splice(3, 1);
students.forEach((st) => console.log(st.Name));


console.log("-------------END OF TASK --------------/n");







//& floatong point problem
//^localcompre
//*function using new keyword









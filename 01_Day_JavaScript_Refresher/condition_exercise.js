//Eligible to drive??
// let age = prompt("Enter your age")

// if (age>=18){
//     alert("You are old enough to drive")
// }else{
// alert(`You are left with ${18-age} years to drive.`);
// }

///Age comparison
// let myAge = 28

// let yourAge = prompt("Enter your Age")

// if(yourAge>myAge){
//     alert(`You are ${yourAge-myAge} years older than me`)
// }else{
//     alert(`I am ${myAge-yourAge} years older than you`)
// }

//Ternary
// let a = 5
// let b = 7

// const Compare = (a,b)=>{
// return    (a>b)?console.log("a is greater than b"):console.log("b is greater than a")
// }

// Compare()

// const Number=()=>{
//     let num = prompt("enter a number")

//     if (num%2==0){
//         alert("even number")
//     }else{
//         alert("Odd number")
//     }
// }
// Number()

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

//Grades
// let score = prompt("Enter your score");

// if (score <= 100 || score >= 80) {
//   alert("A");
// } else if (score <= 79 || score >= 70) {
//   alert("B");
// } else if (score <= 69 || score >= 60) {
//   alert("C");
// } else if (score <= 59 || score >= 50) {
//   alert("D");
// } else if (score <= 49 || score >= 0) {
//   alert("F");
// } else {
//   alert("Invalid Score");
// }

// let userInput = prompt("Enter a Month");
// let userInputSentenceCase = (userInput) => {
//     if (!userInput){
//         return 0
//     }
//   if (userInput.length > 1) {
//     return userInput[0].toUpperCase().concat(userInput.slice(1));
//   } else {
//     return userInput[0].toUpperCase();
//   }
// };
// userInputSentenceCase(userInput);

//Season check
// const Autumn = ["September", "October", "November"];
// const Winter = ["December", "January", "February"];
// const Spring = ["March", " April", "May"];
// const Summer = ["June", "July", "August"];

// if (Autumn.includes(userInputSentenceCase(userInput))) {
//    alert("Season is Autumn");
// } else if (Winter.includes(userInputSentenceCase(userInput))) {
//    alert("Season is Winter");
// } else if (Spring.includes(userInputSentenceCase(userInput))) {
//    alert("Season is Spring");
// } else if (Summer.includes(userInputSentenceCase(userInput))) {
//    alert("Season is Summer");
// }else{
//     alert("Invalid month")
// }

const Weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const Weekend = ["Saturday", "Sunday"];

let userInput = prompt("Enter a Day");
let userInputSentenceCase = (userInput) => {
  if (!userInput) {
    return 0;
  }
  if (userInput.length > 1) {
    return userInput[0].toUpperCase().concat(userInput.slice(1));
  } else {
    return userInput[0].toUpperCase();
  }
};
userInputSentenceCase(userInput);

if (Weekdays.includes(userInputSentenceCase(userInput))) {
  alert(`${userInputSentenceCase(userInput)} is a Working day`);
} else if (Weekend.includes(userInputSentenceCase(userInput))) {
  alert(`${userInputSentenceCase(userInput)} is a Weekend`);
} else {
  alert("Invalid Day");
}

// const showDateTime =()=>{
//     let today = new Date();
//     let day = String(today.getDate()).padStart(2,"0")
//     let month = String(today.getMonth()+1).padStart(2,"0")
//     let year = String(today.getFullYear())
//     let time = String(today.getHours())
//     let minute = String(today.getMinutes())

//     console.log(day+"/"+month+"/"+year+" "+time+":"+minute)
// }

// const Reverse =(arr)=>{
//     let reversed =[]
//     arr.map(item=>{
//         reversed.unshift(item)
//     })

//     return reversed
// }

// console.log(Reverse([1,2,3]))

// Evens and Odds

// const GetEvenAndOdds =(number)=>{
//     let odds=0;
//     let evens = 0;

//     for (let i=0; i<=number; i++){
//         if(i%2==0){
//             evens+=1
//         }else{
//             odds+=1
//         }
//  }
//  console.log("odds are ",odds)
//  console.log("evens are ", evens)

// }

// GetEvenAndOdds(100)

// const generateRandomname = (num) => {
//     const letters = "0123456789abcdefghijklmnopqrstuvwxyz"

//     randomNum =()=> Math.floor(Math.random()*(letters.length-1))
//     let name =""
//     for(let i =0 ;i<num; i++){
//         name+=letters[randomNum()]
//     }

// return name
// }

// const generateColors = (scheme, combos) => {
//   let hexcodes = "01234abcdef";
//   let rgbColors = () => {
//     return Math.floor(Math.random() * 256);
//   };
//   let colorArray = [];
//   let singleColor = "#";

//   const generateRgbNum = (hexc) => {
//     return hexc[Math.floor(Math.random() * hexc.length)];
//   };

//   if (scheme == "hexa" && combos == 3) {
//     for (let i = 0; i < combos; i++) {
//       let singleColor2 = "#";
//       for (let character = 0; character < 6; character++) {
//         singleColor2 += generateRgbNum(hexcodes);
//       }
//       colorArray.push(singleColor2);
//     }
//     return colorArray;
//   } else if (scheme == "hexa" && combos == 1) {
//     for (let i = 0; i < 6; i++) {
//       singleColor += generateRgbNum(hexcodes);
//     }
//     return singleColor;
//   } else if (scheme == "rgb" && combos == 1) {
//     singleColor = `rgb(${rgbColors()},${rgbColors()},${rgbColors()})`;
//     return singleColor;
//   } else if (scheme == "rgb" && combos == 3) {
//     for (let i = 0; i < combos; i++) {
//       colorArray.push(`rgb(${rgbColors()}, ${rgbColors()},${rgbColors()})`);
//     }
//     return colorArray;
//   }
// };

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }

let {firstName,lastName,age, skills:[skill1, ...skills]} = person

console.log(skills[1])

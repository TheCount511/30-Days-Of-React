// let dog ={}
// console.log(dog)
// pre ="br"
// let { dname="tobi",legs="4",color="brown",age="16", bark=()=>{console.log("Woof")}, getInfo=()=>{
//     console.log(`name is ${dname}`)
// }} = dog;

// bark()
// console.log(dname)
// getInfo()


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// const mostSkills =(obj)=>{

// let values= Object.entries(obj)
// let topuser = values[0]

// values.map((user) => {
//     if(user[1].skills.length > topuser[1].skills.length){

//         topuser = user}
// })
// console.log(`${topuser[0]} has the most skills `)
// }
// mostSkills(users)

// points greater than 50
// const mostSkills =(obj)=>{

//     let values= Object.entries(obj)
//     let topuser = []
    
//     values.map((user) => {
//         if(user[1].points >= 50){
    
//             topuser.push(`${user[0]} with ${user[1].points} points`)}
//     })
//     console.log(topuser)
//     }
//     mostSkills(users)

//Mern Stack devs
// const MernDevelopers =(obj)=>{
//     const MernStack = ['MongoDB', 'Express', 'React', 'Node']
//     const usersArray = Object.entries(obj)

//         usersArray.map(user=>{
//             MernStack.every((skill)=>{ if(user[1].skills.includes(skill)){
//                 console.log(user[0])
//             }}
//         )})
// }

// MernDevelopers(users)

// const Keysss =(obj)=>{
// console.log(Object.values(obj))
// }

// Keysss(users)
const personAccount={}
let {firstName,lastName, incomes, expenses, totalIncome, totalExpense, accountInfo, addIncome, addExpense, accountBalance} = personAccount 
incomes = new Set()


// class Animals {
//     constructor(name,age,color,legs){
//         this.name = name
//         this.age = age
//         this.color = color
//         this.legs = legs
//     }
//     sayName=()=>{
//         console.log(this.name)
//     }
//     sayAge =()=>{return this.age}
// }


// let Bingo = new Animals("Bingo",12,"Brown","4")

// console.log(Bingo.sayAge())

// class Cat extends Animals{
//     constructor(name,age,color,legs,sound){
//         super(name,age,color,legs)
//         this.sound = sound
//     }

//     sayName=()=>this.sound
// }

// let garfiel =new Cat("Garfiels",12,"white",4,"Meow")

// console.log(garfiel.sayName())

class Statistacks {
    constructor(ranges){
        this.ranges = ranges
    }

    getCount=() => this.ranges.length

    getSum =()=>this.ranges.reduce((item,summer)=>item+summer)

    getMin = () => Math.min(...this.ranges)

    getMax =()=>Math.max(...this.ranges)

    getRange = ()=> this.getMax()-this.getMin()

    getMean =()=>this.getSum()/this.getCount()

    getMedian =()=>{
        let center = this.getCount()/2
        if(this.getCount()%2==0){
            return(this.ranges[center-1], " ", this.ranges[center])
    }else{
        return(this.ranges[Math.floor(center)])
    }
}

//get the numbers by looping through the array
//have an array of objects when an item is looped over, check if there is a property in the array of objects
//that includes... that item
//if there is, get the object and add 1 to the existing value
//if it doesn't exist add the item as a property and set 1 to the value
//to get the max, loop over the new objects, and 
//use sort to get the bigger value
getMode =()=>{
    let numsAndOccurences ={}
    this.ranges.forEach(num => {
        if(numsAndOccurences.hasOwnProperty(`${num}`)){
            numsAndOccurences[`${num}`]+=1
        } else{
            numsAndOccurences[`${num}`]=1
        }
    })
    let sorted = (Object.entries(numsAndOccurences).sort((a,b)=>a[1]-b[1]))
    console.log(sorted[sorted.length-1])

    console.log(numsAndOccurences)
}


}

ages = [1,2,3,4,5,6,7,7,7,7,7,8,9]

let school = new Statistacks(ages)

console.log(school.getMode())
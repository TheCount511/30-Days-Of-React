const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

if (webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess")
}else{
    webTechs.push("Sass")
}

const Fullstack = [...frontEnd,...backEnd]
console.log(Fullstack)

const ages = [19, 22, 19, 24, 20, 25, 26, 23, 25, 21]
ages.sort()
console.log(ages)

const minAge = ages[0]
const maxAge = ages[ages.length-1]

const medianCalculator = (input)=>{
    let mid = input.length/2
    
    if(input.length % 2!==0){  
        console.log(input.length % 2)
      return  input[Math.floor(mid)]
    }
    else{
        return (((input[mid-1]+input[mid]))/2)
    }
}

console.log(medianCalculator(ages),"gttt")

const AverageAge =(arr)=>{
    let sum = 0;
    arr.map(age=>{
        console.log(`${sum}+${age}`)
        sum+=age
    })

    console.log(sum/(arr.length))
    
    return (sum/(arr.length))
    
}

AverageAge(ages)

const Range = maxAge - minAge
console.log(Range)

console.log("Min - Ave ", Math.abs(minAge-AverageAge(ages)))

console.log("Ave - Max ", AverageAge(ages)-maxAge)
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// let sum = 0
// products.forEach((product)=>{
//     if(typeof(product.price)==='number')
//     {sum+=product.price}
// })

// console.log(sum)



// let prices = products.map(item=>item.price)

// console.log(prices)
// let sum = products.map(item=>item.price).filter(item=>typeof(item)=='number').reduce(((item,adder)=>item+adder))
// console.log(sum)

// zeroprice = products.findIndex(item=> typeof(item.price)!='number')
// console.log(zeroprice)

//someNonValues
let someNonValues = products.every(item=>typeof(item.price)==='number')
console.log(someNonValues)
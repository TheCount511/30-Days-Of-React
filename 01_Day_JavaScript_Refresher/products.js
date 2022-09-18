const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy',"TheCount511"],
    },
  ]

const rateProduct = (productInput,user)=>{
    console.log(productInput)
productInput.ratings.push({_id:user.id,ratings:user.rating})
};

let generateRandom = (defaultUpper=2)=>{
    return    Math.floor(Math.random()*(defaultUpper-0+1)+0)
    }

let loggedUser = {id:"TheCount511", rating:generateRandom(5)};
console.log(loggedUser.rating)

console.log(generateRandom())
let productInfocus = products[generateRandom()];
rateProduct(productInfocus,loggedUser);

const likeProduct =(productInput,user)=>{

let userIndex = productInput.likes.indexOf(user.id);
const Productlikes = productInput.likes
Productlikes.includes(user.id)?Productlikes.splice(userIndex,1):Productlikes.push(user.id)
}

likeProduct(productInfocus, loggedUser)
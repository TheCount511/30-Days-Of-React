const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]

const signUp=(newUser,usersArray)=>{
 let isExist =   usersArray.some((user) => user.email == newUser.email); 
 (isExist?console.log(`${newUser.email} exists already`):[usersArray.push(newUser), alert("Profile created")])
 return (console.log("Tadaaaa"))
    }

let news = {
    _id: 'ghdercc',
    username: 'Fadhil',
    email: 'fadhilakins@gmail.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
}

signUp(news,users)

const signIn=(usertolog,usersArray)=>{
    let validuser = usersArray.some((user)=>user._id===usertolog._id && user.email ===usertolog.email);

    (validuser?alert(`you are now signed in ${usertolog.email}`):alert(`Invalid credentials`))
    
    }

signIn(news,users)
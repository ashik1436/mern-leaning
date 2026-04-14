// getting-started.js
const mongoose = require('mongoose');
main()
.then((res)=>{
    console.log("connection success")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User",userSchema);

// User.insertMany([
//     {name:'Tony',email:'tony@gmail.com',age:50},
//     {name:'peter',email:'peter@gmail.com',age:47},
//     {name:'bruce',email:'bruce@gmail.com',age:30}
// ]).then((res)=>{
//     console.log(res);

// });
// const user2= new User({
//     name:"abdul",
//     email:"as@gmail.com",
//     age:28
// });

// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// });


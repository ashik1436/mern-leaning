const mongoose = require('mongoose');
const Chat = require("./models/chat.js")

main()
.then(()=>{
    console.log("connection succesfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

Chat.insertMany([
    {
    from:"neha",
    to:"ashik",
    msg:"i love you",
    created_at:new Date()
    },
    {
    from:"ishuu",
    to:"ashuu",
    msg:"i love you too",
    created_at:new Date()
    },
    {
    from:"srinivas",
    to:"chalie",
    msg:"i hate you",
    created_at:new Date()
    },
    {
    from:"mujeeb",
    to:"lkalyani",
    msg:"i like you",
    created_at:new Date()
    },
]);

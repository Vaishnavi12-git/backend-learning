const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let allchats = [
//     {
//         from: "Vaishnavi",
//         to: "Faroza",
//         msg: "yessss brooo",
//         created_at: new Date(),
//     },
//     {
//         from: "Faroza",
//         to: "Vaishnavi",
//         msg: "Let's go to Central Park and chilll",
//         created_at: new Date(),
//     },
//     {
//         from: "Vaishnavi",
//         to: "Faroza",
//         msg: "Great idea bro....getting ready in 10 mins",
//         created_at: new Date(),
//     },
//     {
//         from: "Faroza",
//         to: "Vaishnavi",
//         msg: "Waiting near your apartment",
//         created_at: new Date(),
//     },
// ];

// Chat.insertMany(allchats);

Chat.findByIdAndDelete('699f02cb4f2bcf49ac96b681')
.then(res => {
    console.log(res);
});


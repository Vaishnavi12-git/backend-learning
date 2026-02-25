const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main().then((res) => {
    console.log("connected");
})
.catch((err) => console.log("Error") );

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name: "Vaishnavi",
//     email: "vaishnavi@gmail.com",
//     age: 20
// });

// user1.save();

// User.insertMany([
//     {name: "Faroza", email: "faroza@gmail.com", age: 19},
//     {name: "Thraya", email: "thraya@gmail.com", age: 19},
//     {name: "Taylor", email: "taylor@gmail.com", age: 38}
// ]).then((res) => {
//     console.log(res);
// });

// User.findOne({age: {$gte: 20}}).then(res => {
//     console.log(res);
// });

// User.findOneAndUpdate({name: "Vaishnavi"}, {age: 19}, {new: true}).then(res => {
//     console.log(res);
// });

User.findOneAndDelete({name: "Taylor"}).then(res => {
    console.log(res);
});
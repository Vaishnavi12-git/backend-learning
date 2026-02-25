const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main().then((res) => {
    console.log("connected");
})
.catch((err) => console.log("Error") );

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [50, "Too low price"],
    },
});

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     title: "Good Girls Guid To Murder",
//     author: "Holly Jackson",
//     price: 399,
// });

// book1.save()
// .then(res => {
//     console.log(res);
// }).catch( err => {
//     console.log(err);
// });

const book2 = new Book({
    title: "Turtels all the way down",
    author: "John Green",
    price: 20,
});

book2.save()
.then(res => {
    console.log(res);
}).catch( err => {
    console.log(err.errors.price.properties.message);
});

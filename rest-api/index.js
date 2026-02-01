const express = require("express");
const app = express();
let port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

let posts =[
    {
        username : "Agrima Singh",
        content : "Do not stop at threshold point"
    },
    {
        username : "Vaishnavi Kale",
        content : "I Love Taylor :)"
    },
    {
        username : "Faroza-Zareen",
        content : "I Love Pink!!!!!!"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.listen(port, () => {
    console.log("Server is on");
});
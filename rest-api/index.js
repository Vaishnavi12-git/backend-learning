const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const{v4: uuidv4} = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.set("view engine", "ejs");

let posts =[
    {
        id: uuidv4(),
        username : "Agrima Singh",
        content : "Do not stop at threshold point"
    },
    {
        id: uuidv4(),
        username : "Vaishnavi Kale",
        content : "I Love Taylor :)"
    },
    {
        id: uuidv4(),
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

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    let newContent = req.body.content;
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("Server is on");
});
const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

const instaData = require("./data.json");

// Route to display Instagram-like profile based on username 
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    let data = instaData[username];
    if (data) {
        res.render("instagram.ejs", {data});
    }else {
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log("Server is on");
});
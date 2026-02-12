const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

let app = express();
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'vaishnavi@12'
});

let createRandomUser = () => {
  return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
  ];
}

//Home Route
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
        if (err) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs", {count});
     });
  }catch {
      res.send("Some err in DB");
      console.log(err);
    }
});

//Show Route
app.get("/user", (req, res) => {
  let q = "SELECT* FROM user";
  try {
    connection.query(q, (err, users) => {
        if (err) throw err;
        res.render("showusers.ejs", {users});
     });
  }catch {
      res.send("Some err in DB");
      console.log(err);
    }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
    connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        console.log(result[0]);
        res.render("edit.ejs", {user});
     });
  }catch {
      res.send("Some err in DB");
      console.log(err);
    }
});

//update (DB) Route
app.patch("/user/:id", (req, res) => {
   let {id} = req.params;
   let q = `SELECT * FROM user WHERE id='${id}'`;
   let {password: formPass, username: newUsername} = req.body;
   try {
    connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        if(formPass != user.password) {
          res.send("WRONG Password");
        }else {
          let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
          connection.query(q2, (err, result) => {
              if (err) throw err;
              res.redirect("/user");
          });
        }
     });
  }catch {
      res.send("Some err in DB");
      console.log(err);
    }
});

app.listen("8080", () => {
  console.log("Server is on!!");
});

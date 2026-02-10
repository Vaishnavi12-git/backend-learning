const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const path = require("path");

let app = express();
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


// connection.end();
//   res.send("welcome to home page");
// });

app.listen("8080", () => {
  console.log("Server is on!!");
});

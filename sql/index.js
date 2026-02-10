const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'vaishnavi@12'
});

let q = "INSERT INTO user (id, user, email, password) VALUES ?";
let user = [
         ["456", "456_user", "def@gmail.com", "def"],
         ["789", "789_user", "ghi@gmail.com", "ghi"],
];

try {
    connection.query(q, [user], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
}catch {
    console.log(err);
}

connection.end();

let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const express = require("express");

const app = express();

let port = 3000;

app.get('/', (req, res) => {
  res.send("<h1>You contacted the root path</h1>");
});

app.get('/:username', (req, res) => {
  let {username} = req.params;
  res.send(`<h1>This account belongs to @${username}</h1>`);
});

app.listen(port, () => {
  console.log('Server is running');
});



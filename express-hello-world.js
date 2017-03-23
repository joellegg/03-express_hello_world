const express = require('express');
const app = express();
let [,,input] = process.argv;

let PORT = input || 8080;

app.get('/', (req, res) => {
  res.send('Hello King James!');
})

app.get('/time', (req, res) => {
  let timeStamp = new Date();
  res.send(timeStamp)
})

app.listen(`${PORT}`);

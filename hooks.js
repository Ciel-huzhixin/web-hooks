const express = require('express');

const app = express();

app.get('/front', (req, res) => {
  console.log(req.headers);
  res.send({success: true});
})

app.get('/backed', (req, res) => {
  console.log(req.headers);
  res.send({success: true});
})


app.listen(3000, () => {
  console.log('server running at localhost:3000');
})
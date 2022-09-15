const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.get('/front', (req, res) => {
  console.log('get front');
  res.send({ success: true });
})

app.get('/backed', (req, res) => {
  console.log('get backed');
  res.send({ success: true });
})

app.post('/backed', (req, res) => {
  console.log(req.headers);
  const backed = spawn('sh', ['./backed.sh']);
  backed.stdout.on('data', data => {
    console.log('backed output ' + data);
  })
  res.send({ success: true });
})

app.post('/front', (req, res) => {
  console.log(req.headers);
  const front = spawn('sh', ['./front.sh']);
  front.stdout.on('data', data => {
    console.log('front output ' + data);
  })
  res.send({ success: true });
})

app.listen(3000, () => {
  console.log('server running at localhost:3000');
})



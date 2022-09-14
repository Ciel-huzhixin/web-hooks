const express = require('express');

const app = express();

app.get('/front', (req, res) => {
    console.log('get front');
    res.send({success: true});
})

app.get('/backed', (req, res) => {
    console.log('get backed');
    res.send({success: true});
})

app.post('/backed', (req, res) => {
    console.log(req.headers);
    res.send({success: true});
})

app.post('/front', (req, res) => {
    console.log(req.headers);
    res.send({success: true});
})

app.listen(3000, () => {
  console.log('server running at localhost:3000');
})

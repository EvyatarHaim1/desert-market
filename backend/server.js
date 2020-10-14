const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const {port} = require('./config')
const items = require('./routes/items');
require('dotenv').config();

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
  
app.use('/', items);

app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
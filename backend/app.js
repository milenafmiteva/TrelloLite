const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = 4200;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((require, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});







app.listen(4200, () => {
    console.log('App is listening on port ' + 4200);
})
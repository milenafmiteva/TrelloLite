const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((require, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//Load in tue mongoose models
const { Board, Task } = require('./db/modules');

/* ROUTE HANDLERS */

/* LIST ROUTES */

/**
 * GET /boards
 * Purpose: Get all boards
 */
app.get('/boards', (req, res) => {
    //We want to return an array of all the boards in the database
});

/**
 * POST /boards
 * Purpose: Create a board
 */
app.post('/boards', (req, res) => {
    //We want to create a new board and return the new board document back to the user (which includes id)
    //The board information (fields) will be passed in via the JSON request body
});

/**
 * PATH /boards/:id
 * Purpose: Update a specified board
 */
app.patch('/boards/:id', (req, res) => {
    //We want to update the specified board (board document with id in the URL) with the new values specified int the JSON body ot the request
});

/**
 * DELETE /boards/:id
 * Purpose: Delete a board
 */
app.delete('/boards/:id', (req, res) => {
    //We want to delete the specified board (document with id in the URL)
});

app.listen(PORT, () => {
    console.log('App is listening on port ' + PORT);
})
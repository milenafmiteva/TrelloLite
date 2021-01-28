const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db/mongoose');

const PORT = 4200;

const app = express();

//Load middleware
app.use(bodyParser.json());

app.use(cors());

app.use((require, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


//Load in the mongoose models
const { Board, Task } = require('./db/modules');


/* ROUTE HANDLERS */

/* LIST ROUTES */

/**
 * GET /boards
 * Purpose: Get all boards
 */
app.get('/boards', (req, res) => {
    //We want to return an array of all the boards in the database
    Board.find().then((boards) => {
        res.send(boards);
    }).catch((e) => {
        res.send(e);
    });
});

/**
 * POST /boards
 * Purpose: Create a board
 */
app.post('/boards', (req, res) => {
    //We want to create a new board and return the new board document back to the user (which includes id)
    //The board information (fields) will be passed in via the JSON request body
    let title = req.body.title;

    let newBoard = new Board({
        title
    });
    newBoard.save().then((boardDoc) => {
        //the full board document is returned (incl. id)
        res.send(boardDoc);
    });
});

/**
 * PATH /boards/:id
 * Purpose: Update a specified board
 */
app.patch('/boards/:id', (req, res) => {
    //We want to update the specified board (board document with id in the URL) with the new values specified int the JSON body ot the request
    Board.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

/**
 * DELETE /boards/:id
 * Purpose: Delete a board
 */
app.delete('/boards/:id', (req, res) => {
    //We want to delete the specified board (document with id in the URL)
    Board.findOneAndRemove({
        _id: req.params.id
    }).then((removedBoardDoc) => {
        res.send(removedBoardDoc);
    });
});


/**
 * GET /boards/:boardId/tasks
 * Porpose: Get all tasks in a specific board
 */
app.get('/boards/:boardId/tasks', (req, res) => {
    //We want to return all tasks that belong to a specific list (specified by boardId)
    Task.find({
        _boardId: req.params.boardId
    }).then((tasks) => {
        res.send(tasks);
    });
});

app.get('/boards/:boardId/tasks/:taskId', (req, res) => {
    Task.findOne({
        _id: req.params.taskId,
        _boardId: req.params.boardId
    }).then((task) => {
        res.send(task);
    })
});

/**
 * POST /boards/:boardId/tasks
 * Porpose:  Create a new task in a specific list
 */
app.post('/boards/:boardId/tasks', (req, res) => {
    //We want to create a new task in a list specified by boardId
    let newTask = new Task({
        title: req.body.title,
        _boardId: req.params.boardId
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    });
});

/**
 * PATCH /boards/:boardId/tasks/taskId
 * Porpose:  Update an existing task
 */
app.patch('/boards/:boardId/tasks/taskId', (req, res) => {
    //We want to update an existing task (specified by taskId)
    Task.findOneAndUpdate({ 
        _id: req.params.taskId,
        _boardId: req.params.boardId
    }, {
        $set: req.body
        }
    ).then(() => {
        res.sendStatus(200);
    })
});


/**
 * DELETE /boards/:boardId/tasks/:taskId
 * Purpose: Delete a task
 */
app.delete('/boards:boardId/tasks/:taskId', (req, res) => {
    //We want to delete the specified task
    Task.findOneAndRemove({
        _id: req.params.taskId,
        _boardId: req.params.boardId
    }).then((removedTaskDoc) => {
        res.send(removedTaskDoc);
    });
});

app.listen(4200, () => {
    console.log('App is listening on port ' + 4200);
})
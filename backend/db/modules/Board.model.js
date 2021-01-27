const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

const Board = mongoose.Model('Board', BoardSchema);

module.exports = { Board }
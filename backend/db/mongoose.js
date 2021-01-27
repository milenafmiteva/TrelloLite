//This file will handle connection logic to the MongoDB database

const mogoose = require('mongoose');

mogoose.Promise = global.Promise;
mogoose.connect('mongoose://localhost:27017/TrelloLite', {useNewUrlParser: true}).then(() => {
    console.log("Connection to MongoDB successfuly!");
}).catch((e) => {
    console.log("Error while attempting to connect t MongoDB!");
    console.log(e);
});

//To prevent deprectation warnings (from MongoDB native friver)
mogoose.set('useCreateIndex', true);
mogoose.set('useFindAndModify', false);

modulele.exports = {
    mongoose
};
var express = require('express');
var app = express();
var keyValue = require('./routes/keyValue.route'); // Imports routes

// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://root:example@mongo:27017/admin', { useNewUrlParser: true, useFindAndModify: false }).then(() => {
    console.log("Successfully connected to Mongo database");
}).catch(err => {
    console.log('Could not connect to Mongo database. Exiting now...', err);
    process.exit();
});

// For everthing under /v1 refer to the routes
app.use('/v1', keyValue);

var port = 8080;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


var express = require('express');
var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://root:example@127.0.0.1:27017/admin', { useNewUrlParser: true }, () => 
    console.log('Connected to MongoDB')
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Listener
var port = 8080;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


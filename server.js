var express = require('express');
var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://root:example@127.0.0.1:27017/admin', { useNewUrlParser: true }, () => 
    console.log('Connected to MongoDB')
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post("/v1/key/:key/value/:value",(req,res,next)=>{
    console.log('Received POST request with key/value: ', req.params.key, '/', req.params.value);
    res.send('Key/value accepted');
});

app.get('/v1/key/:key',(req,res,next)=>{
    console.log('Received GET request for key: ', req.params.key);
    res.send('Getting Key/Value ');
})

app.delete('/v1/key/:key', (req,res,next)=>{
    console.log('Received DELETE request for key: ', req.params.key);
    res.send('Deleting key');
})


var port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


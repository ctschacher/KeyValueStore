const express = require('express');
const router = express.Router();

var KeyValue = require('../models/keyValue.model');


// Define request responses
router.post("/key/:key/value/:value", (req, res, next) => {
    console.log('Received POST request with key/value: ', req.params.key, '/', req.params.value);

    // If key already exist then update otherwise create it
    KeyValue.findOneAndUpdate({ key: req.params.key }, { value: req.params.value }, { upsert: true }, (error) => {
        if (error) {
            return next(err)
        }
        res.send('Key/Value created successfully')
    }
    );
})

router.get('/key/:key', (req, res, next) => {
    console.log('Received GET request for key: ', req.params.key);
    KeyValue.findOne({ key: req.params.key }, function (err, obj) {
        if (err || obj == null) {
            res.status(404).send('Key not found');
            return next(err);
        }
        res.send(obj.value);
    })
})

router.delete('/key/:key', (req, res, next) => {
    console.log('Received DELETE request for key: ', req.params.key);
    KeyValue.findOneAndRemove({ key: req.params.key }, function (err, obj) {
        if (err || obj == null) {
            res.status(404).send('Key not found');
            return next(err);
        }
        res.send('Key deleted successfully');
    })
})

module.exports = router;
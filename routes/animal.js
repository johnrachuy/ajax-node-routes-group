var express = require('express');
var router = express.Router();
var path = require('path');
var animalArray = [];

//router.get('/', function(req, res) {
//    res.send({message: 'hello'});
//});

router.post('/', function(req, res) {
    animalArray.push(req.body);
    console.log(req.body);
    res.send(animalArray);
});



module.exports.router = router;
module.exports.animalArray = animalArray;
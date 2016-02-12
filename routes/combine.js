var express = require('express');
var router = express.Router();
var path = require('path');
var animal = require('./animal');
var name = require('./name');
var finalMagic = '';
var nameArray = name.nameArray;
var animalArray = animal.animalArray;

var  randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




function getPair() {
    var nameRandom = randomNumber(0, nameArray.length);
    var animalRandom = randomNumber(0, animalArray.length);
    finalMagic = nameArray[nameRandom].name + ' ' + animalArray[animalRandom].spiritAnimal;
    console.log(nameArray);
}



router.get('/', function(req, res) {
    getPair();
    res.send(finalMagic);
});

//router.post('/', function(req, res) {
//    console.log(req.body);
//    res.send(finalMagic);
//});

module.exports = router;

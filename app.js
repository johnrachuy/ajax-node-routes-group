var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var name = require('./routes/name');
var animal = require('./routes/animal');
var combine = require('./routes/combine');

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

// name = {'router' : router, 'nameArray': nameArray}
app.use('/name', name.router);
app.use('/animal', animal.router);
// combine = router
app.use('/combine', combine);

app.get('/*', function(req, res) {
    console.log("Here is the request: " , req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public/', file));
});

app.listen(app.get('port'), function() {
    console.log('Server is ready on port ' + app.get('port'));
});
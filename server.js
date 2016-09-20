var express = require('express');

var app = express();
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose');

var hymnsController = require('./server/controllers/hymn-controller');

mongoose.connect('mongodb://localhost:27017/lar-mean-stack');

app.use(bodyParser());

app.get('/', function(req, res){
    res.sendfile(__dirname + '/client/views/index.html');
});


app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/hymns', hymnsController.list);
app.post('/api/hymns', hymnsController.create); 

app.listen(3000, function(){
    console.log('I\'m listening ... at 3000');
});
var Hymn = require('../models/hymns')

module.exports.create = function(req, res){
    var hymn = new Hymn(req.body);
    hymn.save(function(err, result){
        res.json(result);
    });

}

module.exports.list = function(req, res){
    Hymn.find({}, function(err, results){
        res.json(results);
    })
}
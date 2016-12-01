/*--By Diego Rodriguez 11/30/16
    Title: HW_LoyaltyOne */
require('../models/data.server.model');
var mongoose = require('mongoose'),
    Data = mongoose.model('Data1');

//set the title of my new page for routes
exports.render = function(req, res) {
    res.render('index', {
        title: 'Hello World',
    });
};

/*exports.showText = function(req, res, next, text1) {
    console.log(text1);
}*/

exports.enter = function(req, res) {
    var data = new Data(req.body);

    data.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(data);
        }
    });
}
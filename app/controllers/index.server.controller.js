/*--By Diego Rodriguez 11/30/16
    Title: HW_LoyaltyOne */

require('../models/data.server.model');
var mongoose = require('mongoose'),
    Data = mongoose.model('Data2');


//set the title of my new page for routes
exports.render = function(req, res) {
    res.render('index', {
        title: 'Please leave your comments',
    });
};

/*exports.showText = function(req, res, next, text1) {
    console.log(text1);
}*/

//Error 
var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].Data
            message;
        }
    } else {
        return 'Unkonwn server error';
    }
};

//POST Create new message
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

//GET get all the messages
exports.list = function(req, res) {
    Data.find()
        .populate('responses')
        .sort([
            ['name', 'ascending']
        ])
        .exec(function(err, data) {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.json(data);
            }
        });
};

//POST Create new response
exports.createR = function(req, res) {
    console.log(req.body.mess);
    Data.findByIdAndUpdate(
        req.body.mess, { $push: { "responses": { r: req.body.respons } } }, { safe: true, upsert: true },
        function(err, model) {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            }
        }
    );

}
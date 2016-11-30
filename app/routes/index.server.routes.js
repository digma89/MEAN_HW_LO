/*--By Diego Rodriguez 11/30/16
    Title: HW_LoyaltyOne */

module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};
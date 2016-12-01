/*--By Diego Rodriguez 11/30/16
    Title: HW_LoyaltyOne */
var index = require('../controllers/index.server.controller');

module.exports = function(app) {

    app.get('/', index.render);
    /* app.route('/api/:text1')
        .get(index.render);
*/

    app.route('/api')
        .get(index.list)
        .post(index.enter);

    /*  app.param('text1', index.showText);*/

};
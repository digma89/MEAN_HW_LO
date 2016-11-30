/*--By Diego Rodriguez 11/30/16
    Title: HW_LoyaltyOne */

//set the title of my new page for routes
exports.render = function(req, res) {
    res.render('index', {
        title: 'Hello World'
    });
};
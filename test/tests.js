var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server');
var should = chai.should();
var expect = chai.expect();
chai.use(chaiHttp);

/*
 * Test the /GET route
 */
describe('Test requests', () => {
    //Test get request
    it('The page is showing', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
    /*    //test get with parameters
        it('should recieve some text /<id> GET', function(done) {
            var text = "someText";
            chai.request(app)
                .get('/' + text)
                .send(text)
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.equal(text)
                    done();
                });
        });*/


});
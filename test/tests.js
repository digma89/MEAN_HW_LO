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

    //Test creating new comments
    it('POST creating new comments is working', function(done) {
        chai.request(app)
            .post('/api')
            .send({ "name": "test1", "data": "test" })
            .end(function(err, res) {
                if (err) done(err);
                res.body.should.have.property('name');
                res.body.should.have.property('data');
                res.should.have.status(200);
                done();
            });
    });

    //Test get request
    it('Get list of users', function(done) {
        chai.request(app)
            .get('/api')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
    /*
        //Test creating adding responses
        it('POST adding responses is working', function(done) {
            chai.request(app)
                .post('/api/response')
                .send({ "respons": "test1" })
                .end(function(err, res) {
                    if (err) done(err);
                    // res.should.have.status(200);
                    done();
                });
        });
    */


});
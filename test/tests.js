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

    it('POST is working', function(done) {
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
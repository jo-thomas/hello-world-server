const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const APP = require('../app.js');

describe('API endpoint /', function() {
  this.timeout(3000); // How long to wait for a response (ms)
  before(function() {

  });

  after(function() {

  });

  it('should return hello world', function() {
    return chai.request(APP)
      .get('/')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('hello world');
      });
  });

  it('uppercase=true should return HELLO WORLD', function() {
    return chai.request(APP)
      .get('/?uppercase=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('HELLO WORLD');
      });
  });

  it('reverse=true should return dlrow olleh', function() {
    return chai.request(APP)
      .get('/?reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('dlrow olleh');
      });
  });

  it('uppercase=true & reverse=true should return DLROW OLLEH', function() {
    return chai.request(APP)
      .get('/?uppercase=true&reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('DLROW OLLEH');
      });
  });

  it('uppercase=false & reverse=false should return hello world', function() {
    return chai.request(APP)
      .get('/?uppercase=false&reverse=false')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('hello world');
      });
  });

  it('uppercase=true & reverse=false should return HELLO WORLD', function() {
    return chai.request(APP)
      .get('/?uppercase=true&reverse=false')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('HELLO WORLD');
      });
  });

  it('uppercase=false & reverse=true should return dlrow olleh', function() {
    return chai.request(APP)
      .get('/?uppercase=false&reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('dlrow olleh');
      });
  });

  it('INVALID QUERY should return hello world', function() {
    return chai.request(APP)
      .get('/?INVALIDQUERY=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('hello world');
      });
  });

  it('INVALID PATH should return 404', function() {
    return chai.request(APP)
      .get('/INVALID_PATH')
      .then(function(err) {
        expect(err).to.have.status(404);
      })
  });

});

describe('API endpoint /hello', function() {
  this.timeout(3000); // How long to wait for a response (ms)
  before(function() {

  });

  after(function() {

  });

  it('should return hello world', function() {
    return chai.request(APP)
      .get('/hello')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('hello');
      });
  });

  it('uppercase=true should return HELLO', function() {
    return chai.request(APP)
      .get('/hello?uppercase=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('HELLO');
      });
  });

  it('reverse=true should return olleh', function() {
    return chai.request(APP)
      .get('/hello?reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('olleh');
      });
  });

  it('uppercase=true & reverse=true should return OLLEH', function() {
    return chai.request(APP)
      .get('/hello?uppercase=true&reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('OLLEH');
      });
  });

  it('uppercase=false & reverse=false should return hello', function() {
    return chai.request(APP)
      .get('/hello?uppercase=false&reverse=false')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('hello');
      });
  });

  it('uppercase=true & reverse=false should return HELLO', function() {
    return chai.request(APP)
      .get('/hello?uppercase=true&reverse=false')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('HELLO');
      });
  });

  it('uppercase=false & reverse=true should return olleh', function() {
    return chai.request(APP)
      .get('/hello?uppercase=false&reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('olleh');
      });
  });

  it('INVALID QUERY should return hello', function() {
    return chai.request(APP)
      .get('/hello?INVALIDQUERY=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('hello');
      });
  });

});

describe('API endpoint /world', function() {
  this.timeout(3000); // How long to wait for a response (ms)
  before(function() {

  });

  after(function() {

  });

  it('should return hello world', function() {
    return chai.request(APP)
      .get('/world')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('world');
      });
  });

  it('uppercase=true should return WORLD', function() {
    return chai.request(APP)
      .get('/world?uppercase=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('WORLD');
      });
  });

  it('reverse=true should return dlrow', function() {
    return chai.request(APP)
      .get('/world?reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('dlrow');
      });
  });

  it('uppercase=true & reverse=true should return DLROW', function() {
    return chai.request(APP)
      .get('/world?uppercase=true&reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('DLROW');
      });
  });

  it('uppercase=false & reverse=false should return world', function() {
    return chai.request(APP)
      .get('/world?uppercase=false&reverse=false')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('world');
      });
  });

  it('uppercase=true & reverse=falses hould return WORLD', function() {
    return chai.request(APP)
      .get('/world?uppercase=true&reverse=false')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('WORLD');
      });
  });

  it('uppercase=false & reverse=true should return dlrow', function() {
    return chai.request(APP)
      .get('/world?uppercase=false&reverse=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('dlrow');
      });
  });

  it('INVALID QUERY should return world', function() {
    return chai.request(APP)
      .get('/world?INVALIDQUERY=true')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.text;
        expect(res.text).to.equal('world');
      });
  });

});

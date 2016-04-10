var assert = require('assert');
var expect = require('chai').expect;
var sinon = require('sinon');
var user = require('../scripts/user.js'); 
var api = require('../scripts/api.js');

describe('Test spy to make sure pass correct User to api', function() {
    before(function () {
        console.log('Before run test cases');

    });
    
    after(function () {
        console.log('After run test cases');
        api.saveUser.restore();

    });
    
    it('should call save once', function () {
        var apiSpy = sinon.spy(api,"saveUser");
        user.saveUser("UserA");
        expect(apiSpy.calledOnce).to.be.true;
        expect(apiSpy.args[0]).to.contain('UserA');
    }); 
})


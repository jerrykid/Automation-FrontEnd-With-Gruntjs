var assert = require('assert');
var expect = require('chai').expect;
var sinon = require('sinon');
var user = require('../scripts/user.js'); 
var api = require('../scripts/api.js');

describe('Test spy to make sure pass correct User to api', function() {
    it('should call save once', function () {
        var apiSpy = sinon.spy(api,"saveUser");
        user.saveUser("Thi");
        expect(apiSpy.calledOnce).to.be.true;
        expect(apiSpy.args[0]).to.contain('Thi');
    }); 
})

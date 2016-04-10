var assert = require('assert');
var expect = require('chai').expect;
var sinon = require('sinon');
var user = require('../scripts/user.js'); 
var api = require('../scripts/api.js');

describe('Spy: Test Save User', function() {
    var apiSpy;
    before(function () {
       console.log('Before run test cases');
       apiSpy = sinon.spy(api,"saveUser");    
        
    });
    
    after(function () {
        console.log('After run test cases');
        api.saveUser.restore();
    });
    
    it('should call save once', function () {
        user.saveUser("UserA");
        expect(apiSpy.calledOnce).to.be.true;
        expect(apiSpy.args[0]).to.contain('UserA');
    }); 
})

describe('Spy: Test get User', function() {
    var apiSpy;
    before(function () {
       console.log('Before run test cases');
       apiSpy = sinon.spy(api,"getUser");    
        
    });
    
    after(function () {
        console.log('After run test cases');
        api.getUser.restore();
    });
    
    it('should call save once', function () {
        user.getUser('1000');
        expect(apiSpy.calledOnce).to.be.true;
        expect(apiSpy.args[0]).to.contain('1000');
    }); 
})

describe('Stubs: test Formatted User', function() {
    var apiStub;
    before(function () {
       console.log('Before run test cases');
       apiStub = sinon.stub(api,"getUser",function (value){
           if(value == '1000')
              return 'Johns 1000';
           else
              return 'Johns 2000';
       });           
        
    });
    
    after(function () {
        console.log('After run test cases');
    });
    
    it.only('Should change on special conditions', function () {
        var formatted = user.getFormattedUser('1000',function (returns) {
            expect(returns).to.equal('Johns 1000');
            return "Johns 1000 Smith";
        });        
        expect(formatted).to.equal("Hello Johns 1000 Smith");
        
        formatted = user.getFormattedUser('2000', function (returns) {
            expect(returns).to.equal('Johns 2000');
            return "Johns 2000 Smith";
        })
        expect(formatted).to.equal("Hello Johns 2000 Smith");
        
    }); 
})



var assert = require('assert');
var sinon = require('sinon');
var DataBase; 
describe('Test User Setup', function() {
    it('should call save once', function () {
        var save = sinon.mock(Database, 'save');
        
        setupNewUser({ name: 'test' }, function () { });
        
        save.restore();
        sinon.assert.calledOnce(save);
    }); 
})

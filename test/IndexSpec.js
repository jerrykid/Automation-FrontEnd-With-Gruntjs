var chai = require('chai');
var expect = require('chai').expect;
var word = require('../index.js');

describe('Do something', function () {
    before(function () {
        console.log('Before run test cases');
    });
    
    after(function () {
        console.log('After run test cases');
    });

    it('Sanitize', function () {
        var foo = 'bar';
        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.length(3);
        expect(foo).to.contain('a');

        var inputWord = 'Word';
        var outputWord = word.sanitize(inputWord);
        expect(outputWord).to.equal('word');

    });

    it('Remove hyphens', function () {
        var inputWord = 'Hello-World';
        var outputWord = word.sanitize(inputWord);
        expect(outputWord).to.equal('hello world');
    });  
    
});

describe('Tokenize', function () {
    it('Tokernize', function () {
        var inputWord = 'hello world';
        var outputWord = word.tokernize(inputWord);
        expect(outputWord).to.include.members(['hello','world']);
    });
});
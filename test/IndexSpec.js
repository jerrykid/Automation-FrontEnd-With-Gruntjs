var chai = require('chai');
var expect = require('chai').expect;
var word = require('../scripts/index.js');
var sinon = require('sinon');
var sinoChai = require('sinon-chai');
chai.use(sinoChai);


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

describe('Github info', function () {
    it('Github info', function (done) {
        word.info(function (reply) {
            console.log(reply);
            done();
        });
        console.log('Hello world');
    })      
    
});

describe('Info Language',function(){
	it('return language info',function(done){
		var language = {
			'language':'Assembly'
		};
		var stub = sinon.stub().returns(language);
		word.infoLanguage(stub, function(reply){
			expect(reply).to.equal('Language is Assembly');
		})
		done();
	});
})
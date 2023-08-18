// Assert

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should(); //actually call the function

let foo = 'bar';
let beverages = { tea: ['chai', 'matcha', 'oolong'] };

test('assert', () => {
    assert.typeOf(foo, 'string'); // without optional message
    assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
    assert.equal(foo, 'bar', 'foo equal `bar`');
    assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
    assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
});

// BDD

foo = 'bar';
beverages = { tea: ['chai', 'matcha', 'oolong'] };

test('expect', () => {
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.lengthOf(3);
    expect(beverages).to.have.property('tea').with.lengthOf(3);
});

foo = 'bar';
beverages = { tea: ['chai', 'matcha', 'oolong'] };

test('should', () => {
    foo.should.be.a('string');
    foo.should.equal('bar');
    foo.should.have.lengthOf(3);
    beverages.should.have.property('tea').with.lengthOf(3);
});

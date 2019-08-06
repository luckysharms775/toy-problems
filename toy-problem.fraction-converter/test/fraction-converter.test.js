const { toFraction } = require('../src/fraction-converter.js');
const { expect } = require('chai');

describe('toFraction()', function () {

  it('should exist', function () {
    expect(toFraction).to.exist;
  });

  it('should be a function', function () {
    expect(toFraction).to.be.a('function');
  });

  it('should return a result', function () {
    expect(toFraction(0.25)).to.exist;
  });

  it('should return a string', function () {
    expect(toFraction(0.25)).to.be.a('string');
  });

  it('should return the correct fraction 1.0', function () {
    expect(toFraction(1)).to.eql('1/1');
  });

  it('should return the correct fraction for 0.25', function () {
    expect(toFraction(0.25)).to.eql('1/4');
  });

  it('should return the correct fraction for 0.88', function () {
    expect(toFraction(.88)).to.eql('22/25');
  });

  it('should return the correct faction for 0.253213', function () {
    expect(toFraction(0.253213)).to.equal("253213/1000000");
  });

  it('should return the correct faction for 1.75', function () {
    expect(toFraction(1.75)).to.eql('7/4');
  });

  it('should return the correct fraction for 0.0', function () {
    expect(toFraction(0)).to.eql('0/1');
  });

  it('should return the correct faction for 82', function () {
    expect(toFraction(82)).to.eql('82/1');
  });

  it('should work for negative numbers', function () {
    expect(toFraction(-1.75)).to.eql('-7/4');
  });
});

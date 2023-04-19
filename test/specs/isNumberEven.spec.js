const NumbersValidator = require('../../app/numbers_validator');
const {expect} = require('chai');

describe(`isNumberEven positive scenarios`, function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it(`shoult return true if number is even`, function() {
    expect(validator.isNumberEven(2)).to.be.equal(true);
  });
  it(`shoult return true if number is odd`, function() {
    expect(validator.isNumberEven(3)).to.be.equal(false);
  });
  it(`chai test Object`, function() {
    expect({a: 1, b: 'apple'}).to.be.eql({a: 1, b: 'apple'});
  });
  it(`chai test Array`, function() {
    expect([1, 'apple']).to.be.eql([1, 'apple']);
  });
  it(`chai test array Length`, function() {
    expect([1, 'apple']).to.have.length(2);
  });
});

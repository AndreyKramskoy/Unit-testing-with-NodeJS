/* eslint-disable new-cap */

const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('getSummation', () => {
    it('should return the sum of two positive numbers', () => {
      expect(calculator.getSummation(2, 3)).to.be.equals(5);
    });

    it('should return the sum of two negative numbers', () => {
      expect(calculator.getSummation(-2, -3)).to.be.equals(-5);
    });

    it('should throw an error if one argument is not a number', () => {
      expect(() => calculator.getSummation(2, '3')).Throw('is not a numeral');
    });
  });

  describe('getMultiplication', () => {
    it('should return the product of two positive numbers', () => {
      expect(calculator.getMultiplication(2, 3)).to.be.equals(6);
    });

    it('should return the product of a positive and a negative number', () => {
      expect(calculator.getMultiplication(2, -3)).to.be.equals(-6);
    });

    it('should throw an error if one argument is not a number', () => {
      // eslint-disable-next-line max-len
      expect(() => calculator.getMultiplication(2, '3')).Throw('is not a numeral');
    });
  });
});

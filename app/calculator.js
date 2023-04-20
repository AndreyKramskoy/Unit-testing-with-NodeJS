/**
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {

  };

  /**
   * @param {Number} a is numeral
   * @param {Number} b is numeral
   * @return {Number} summ of two numerals a and b
   * @memberof Calculator
   */
  getSummation(a, b) {
    const typeOfVariable = typeof a && typeof b;
    if (typeOfVariable !== 'number') {
      throw new Error(`is not a numeral`);
    } else {
      return a + b;
    }
  }

  /**
   *
   *
   * @param {Number} a is numeral
   * @param {Number} b is numeral
   * @return {Number} multiply of two numerals a and b
   * @memberof Calculator
   */
  getMultiplication(a, b) {
    const typeOfVariable = typeof a && typeof b;
    if (typeOfVariable !== 'number') {
      throw new Error(`is not a numeral`);
    } else {
      return a * b;
    }
  }
}
module.exports = Calculator;

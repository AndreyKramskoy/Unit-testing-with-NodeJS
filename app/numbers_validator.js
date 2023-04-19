/* eslint-disable max-len */
/**
 * Asimple class containing methods for validating numbers
 * @class NumbersValidator
 */
class NumbersValidator {
  /**
     * Creates an instance of NumbersValidator.
     * @memberof NumbersValidator
     */
  constructor() {

  };
  /**
     * @param {Number} number number to check
     * @return {Boolean} true if number is even
     * @memberof NumbersValidator
     */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
    } else {
      return number %2 === 0;
    }
  }
  /**
 *
 *@param {Array<Numbers>} arrayOfNumbers array of numbers to go through
 * @return {Array<Numbers>} array of even numbers
 * @memberof NumbersValidator
 */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
arrayOfNumbers.every((item) => typeof item === 'number')) {
      const arrayOfNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfNumbers;
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  }
};

module.exports = NumbersValidator;

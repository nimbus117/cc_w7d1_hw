const assert = require('assert');
const PrimeChecker = require('../prime_checker.js');

let primeChecker;

beforeEach(function () {
  primeChecker = new PrimeChecker;
})


describe('Prime', function () {
  it('should be prime', function () {
    const actual = primeChecker.checkPrime(5);
    assert.strictEqual(actual, true);
  })
})

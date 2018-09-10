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
  it('should not be prime', function () {
    const actual = primeChecker.checkPrime(4);
    assert.strictEqual(actual, false);
  })
  it('1 should not be prime', function () {
    const actual = primeChecker.checkPrime(1);
    assert.strictEqual(actual, false);
  })
  it('should be prime again', function () {
    const actual = primeChecker.checkPrime(199);
    assert.strictEqual(actual, true);
  })
})

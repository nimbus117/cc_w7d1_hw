const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

}

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', event => {
    const inputtedNumber = event.detail;
    const result = this.checkPrime(inputtedNumber);
    console.log('prime_checker', result);
    PubSub.publish('PrimeChecker:result-calculated');
  })
}

PrimeChecker.prototype.checkPrime = function (number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
}

module.exports = PrimeChecker;

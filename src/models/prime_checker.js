const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

}

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', event => {
    const inputtedNumber = parseInt(event.detail);
    console.log(typeof inputtedNumber)
    const result = this.checkPrime(inputtedNumber);
    console.log('prime_checker', event.detail);
    console.log('prime_checker', result);
    PubSub.publish('PrimeChecker:result-calculated', result);
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

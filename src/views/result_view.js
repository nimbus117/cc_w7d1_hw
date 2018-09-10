const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', event => {
    const isPrime = event.detail;
    console.log('result_view', isPrime);
    this.displayResult(isPrime)
  })
}

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === true) {
    resultElement.textContent = `Yes! It's a prime number.`
  }
  else {
    resultElement.textContent = `No! It's not a prime number.`
  }
}

module.exports = ResultView;

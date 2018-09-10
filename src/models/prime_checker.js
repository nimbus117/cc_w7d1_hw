const PrimeChecker = function () {

}

PrimeChecker.prototype.checkPrime = function (number) {
  result = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result;
}

module.exports = PrimeChecker;

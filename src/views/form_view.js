const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

}

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', function() {
    event.preventDefault();
    const inputtedNumber = this.number.value;
    console.log('form_view', inputtedNumber);
    PubSub.publish('FormView:number-submitted', inputtedNumber);
  })
}

module.exports = FormView;

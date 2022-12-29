// JavaScript code for the calculator
const calculator = {
  // Properties
  output: document.querySelector('.output'),
  buttons: document.querySelector('.buttons'),

  // Methods
  init() {
  // Properties
  output: document.querySelector('.output'),
  buttons: document.querySelector('.buttons'),

  // Methods
  init() {
    this.addEventListeners();
  },
  addEventListeners() {
    this.buttons.addEventListener('click', e => {
      if (e.target.matches('button')) {
        const value = e.target.textContent;
        this.input(value);
      }
    });
  },
  input(value) {
    this.output.textContent += value;
  }
};

calculator.init();

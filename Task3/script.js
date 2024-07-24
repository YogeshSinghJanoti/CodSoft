let result = document.getElementById('result');
let calculator = document.getElementById('calculator');
let buttons = calculator.getElementsByTagName('input');

let currentOperation = '';
let previousOperation = '';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let buttonValue = this.value;

    if (buttonValue === 'c') {
      result.value = '';
      currentOperation = '';
      previousOperation = '';
    } else if (buttonValue === '=') {
      try {
        result.value = eval(currentOperation);
        previousOperation = currentOperation;
        currentOperation = result.value;
      } catch (e) {
        result.value = 'Error';
      }
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      if (currentOperation !== '' && !isNaN(currentOperation[currentOperation.length - 1])) {
        currentOperation += buttonValue;
        result.value = currentOperation;
      }
    } else {
      currentOperation += buttonValue;
      result.value = currentOperation;
    }
  });
}
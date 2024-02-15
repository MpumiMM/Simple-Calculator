function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function toggleSign() {
    let display = document.getElementById('display');
    if (display.value !== '' && display.value !== '0') {
      if (display.value.charAt(0) === '-') {
        display.value = display.value.substr(1);
      } else {
        display.value = '-' + display.value;
      }
    }
  }

  function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression); // Using eval for simplicity, consider using a safer method for real-world applications
    document.getElementById('display').value = result;
  }
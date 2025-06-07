const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function func(operation) {
  try {
    let val = parseFloat(display.value);
    let result;

    switch(operation) {
      case 'sqrt': result = Math.sqrt(val); break;
      case 'log': result = Math.log10(val); break;
      case 'sin': result = Math.sin(val * Math.PI / 180); break;
      case 'cos': result = Math.cos(val * Math.PI / 180); break;
      case 'tan': result = Math.tan(val * Math.PI / 180); break;
      default: result = 'Error'; break;
    }

    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

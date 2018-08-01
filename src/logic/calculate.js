import operate from './operate.js';

const calculate = (data, button) => {
  // data.operation
  switch (button) {
    case 'AC':
      data.total = 0;
      data.next = '';
      break;
    case '+-':
      data.total = data.total * -1;
      data.next = data.total * -1;
      break;
    case '%':
      data.total = data.total * 100;
      break;
    // operators:
    case '÷' :
    case 'X':
    case '+':
    case '-':
        data.operation = button;
      if (data.next != ''){
        data.total = operate(parseInt(data.total), parseInt(data.next), button);
      }
        data.next = '';
      break;
    case '=':
      if (data.next != ''){
        data.total = operate(parseInt(data.total), parseInt(data.next), data.operation);
        // data.total = data.next;
        data.next = '';
      }
      break;
    // numbers:
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      data.next += button;
      // if (data.total === 0) { data.total = data.next } //solves operation problem
      break;
    default:
      // data.next = '';
      break;
  }

  return data;
}

export default calculate;

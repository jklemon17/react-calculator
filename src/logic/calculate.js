import operate from './operate.js';

const calculate = (data, button) => {
  // data.operation
  switch (button) {
    case 'AC':
      data.total = 0;
      data.next = 0;
      break;
    case '+-':
      data.total = data.total * -1;
      data.next = data.total * -1;
      break;
    case '=':
      data.total = data.next;
      break;
    case '%':
      data.total = data.total * 100;
      break;
    default:
      data.total = calculate(data.total, data.next, button)
      break;
  }

  return data;
}

export default calculate;

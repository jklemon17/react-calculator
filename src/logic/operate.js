// import * from 'big-js'

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '÷':
      return ( numberOne / numberTwo )
      break;
    case 'X':
      return ( numberOne * numberTwo )
      break;
    case '+':
      return ( numberOne + numberTwo )
      break;
    case '-':
      return ( numberOne - numberTwo )
      break;
  }
}

// import * from 'big-js'

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === 0) {
    return numberTwo
  }
  switch (operation) {
    case '÷':
      // if (numberOne === 0) { numberOne = 1}
      return ( numberOne / numberTwo )
      break;
    case 'X':
      // if (numberOne === 0) { numberOne = 1}
      return ( numberOne * numberTwo )
      break;
    case '+':
    // if (numberOne === 0) { numberOne = 1}
      return ( numberOne + numberTwo )
      break;
    case '-':
      // if (numberOne === 0) { numberOne = 1}
      return ( numberOne - numberTwo )
      break;
  }
}



export default operate;

import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<string | number>('');

  const resetting = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  const calculate = (operation: string) => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let calcResult = 0;

    switch (operation) {
      case 'add':
        calcResult = number1 + number2;
        break;
      case 'subtract':
        calcResult = number1 - number2;
        break;
      case 'multiply':
        calcResult = number1 * number2;
        break;
      case 'divide':
        calcResult = number1 / number2;
        break;
      case 'power':
        calcResult = Math.pow(number1, number2);
        break;
      default:
        calcResult = 0;
    }

    setResult(calcResult);
  };

  return (
    <div className="calculator-wrapper">
      <div className="input-boxes">
        <label htmlFor="num1"></label>
        <input
          type="text"
          id="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder=""
        />
        <label htmlFor="num2"></label>
        <input
          type="text"
          id="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder=""
        />
      </div>
      <div className="buttons">
        <button onClick={() => calculate('add')}>+</button>
        <button onClick={() => calculate('subtract')}>-</button>
        <button onClick={() => calculate('multiply')}>*</button>
        <button onClick={() => calculate('divide')}>/</button>
        <button onClick={() => calculate('power')}>^</button>
        <button onClick={resetting}>Clear</button>
      </div>
      <p id="result" style={{ color: typeof result === 'number' && result < 0 ? 'red' : 'black' }}>{result}</p>
    </div>
  );
}

export default Calculator;



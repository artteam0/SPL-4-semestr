import React, { useState } from 'react';
import './styles.css';

const Button = ({ title, callback, disabled }) => {
  return (
    <button onClick={callback} disabled={disabled}>
      {title}
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <>
      <h1 className={count == 5 ? 'red' : ''}>{count}</h1>
      <Button title="inc" callback={inc} disabled={count >= 5} />
      <Button title="reset" callback={reset} disabled={count == 0} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}


export default App;
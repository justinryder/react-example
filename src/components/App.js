import React, {useState} from 'react';

function Button({onClick, children, ...props}) {
  return (
    <button
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

function Display({message}) {
  return (
  <div>{message}</div>
  );
}

const toSignedString = value => `${value > 0 ? '+' : ''}${value}`;

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  return (
    <div>
    {[
        -10,
        -5,
        -1,
        1,
        5,
        10
      ].map(increment =>
        <Button
          key={increment}
          onClick={() => incrementCounter(increment)}
        >
          {toSignedString(increment)}
        </Button>
      )}
      <Display message={counter} />
    </div>
  );
}

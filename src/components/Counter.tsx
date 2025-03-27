import React from 'react';
import { Button } from './ui/button';

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = React.useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Counter Component</h2>
      <div className="text-4xl font-bold text-center mb-4">{count}</div>
      <div className="flex justify-center gap-2">
        <Button onClick={decrement} variant="outline">-</Button>
        <Button onClick={reset} variant="secondary">Reset</Button>
        <Button onClick={increment} variant="default">+</Button>
      </div>
    </div>
  );
};

export default Counter;

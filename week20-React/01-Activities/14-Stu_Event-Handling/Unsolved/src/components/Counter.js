import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// Answer: export default allows the Counter function to be imported into other files
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // Answer: useState is a hook that allows you to add state to functional components. It returns an array with two values: the current state and a function that updates it. The only argument to useState is the initial state. In this case, the initial state is 0.
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // Answer: This click handler is incrementing the count by 1
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // Answer: This click handler is decrementing the count by 1
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
	  // Answer: The count, handleIncrement, and handleDecrement props are getting passed to CardBody
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}

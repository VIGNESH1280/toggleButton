import { useState } from "react";
import './style.css';


const Counter = () => {
  const [count, setCount] = useState(0);
  function onClick1() {
    setCount(count + 1);
  }
  function onClick2() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>COUNT:{count}</h1>
      <button onClick={onClick1}>Increment</button>
      <button onClick={onClick2}>Decrement</button>
    </div>
  );
};
export default Counter;

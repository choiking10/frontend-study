import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Hello Count: {count}</h1>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
    </div>
  );
}

export default App;

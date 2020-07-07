import React, { useState } from "react";
import logo from "./logo.svg";
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

class UglyApp extends React.Component {
  state = {
    count: 1,
  };
  increaseCount = () =>
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  decreaseCount = () =>
    this.setState((state) => {
      return { count: state.count - 1 };
    });

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>Hello Count: {count}</h1>
        <button onClick={this.increaseCount}>Increment</button>
        <button onClick={this.decreaseCount}>Decrement</button>
      </div>
    );
  }
}

export default App;

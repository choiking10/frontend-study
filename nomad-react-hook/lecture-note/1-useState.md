# Use State

## Introduction to useState

State를 사용해서 다음과 같이 Functional Programming을 수행할 수 있음

### useState 사용하기

```js
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { count, setCount } = useState(1);
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
```

### useState 사용하지 않고 구현하기

굉장히 많은 line이 필요함.

```js
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
```

왜 위의 예제처럼 render함수안에 increaseCount를 넣으면 되는 것 아니냐? 라고 질문할 수 있는데

내 생각으로는 위는 Functional programming의 convention 이고

아래는 OOP의 Convention을 따랐기 때문이라고 생각함.

## Reference

### 본 프로젝트는 아래의 강의들을 기반으로 작성되었음을 밝힙니다

<https://nomadcoders.co/react-hooks-introduction/lobby>
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

## useInput

간단한 Hook을 만들어 볼건데, 다음과 같이 useInput을 만들어 볼 수 있음.

```js
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
```

사용은 이렇게 할 수 있음. 검증 기능과 input을 받을 수 있는 기능을 만들었음.

```js
function App() {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* same to <input placeholder="Name" value={name.value} onChange={name.onChange} />  */}
      <input placeholder="Name" {...name} />
    </div>
  );
}
```

눈여겨볼 포인트는

- useState를 사용하여 독립적인 Hook을 만들기 쉽다는 것.
- `{...dict}`를 하면 자동으로 unpacking하여 property로 변환해준다는 것.

## useTabs

### 목적

tab을 누를때마다 contents가 변경되도록 수정

### 구현

useTabs Hook Code

```js
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
```

useTabs Hook Apply Code

```js
function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
```

```js
// 데이터
const content = [
  {
    tab: "Section 1",
    content: "I`m the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I`m the content of the Section 2",
  },
];
```

## Error

### useState is called Conditionally Error

에러가 발생한 지점.

```js
const useTabs = (initialTab, allTabs) => {
  if (!allTabs || Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
```

에러 로그

```log
Line 19:43: React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?  react-hooks/rules-of-hooks
```

아직 해결되지 않았음. ㅠㅠ

## Reference

### 본 프로젝트는 아래의 강의들을 기반으로 작성되었음을 밝힙니다

<https://nomadcoders.co/react-hooks-introduction/lobby>
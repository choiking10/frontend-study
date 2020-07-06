# Introduction

## Introduction to Nooks

NPM을 통해 Hook을 공유할 수 있으며, 다운 받을 수 있음.

본 강의에서는 다음과 같은 Hook을 등록하도록 할 것임

- [ ] useTitle
- [ ] useInput
- [ ] usePageLeave
- [ ] useClick
- [ ] useFadeIn
- [ ] useFullScreen
- [ ] useHover
- [ ] useNetwork
- [ ] useNotification
- [ ] useScroll
- [ ] useTabs
- [ ] usePreventLeave
- [ ] useConfirm
- [ ] useAxios

## Requirements

- nodejs
- react

## Workflow

- <https://codesandbox.io/dashboard/recent> 를 사용할 것임.
- 그런데 난 깃을 관리하기위해서 vs에서 하도록 함.

```console
npx create-react-app nook
```

## Hook의 역사와 사용법 간단히 익히기

react Hook은 functional component에서 state를 가질 수 있게 해줌.
Hook은 functional Programming을 가능하도록 해줌.

### 기존의 방식

```js
import React, {Component, useState } from "react";
class App extends Component {
  state = {
    count: 0,
  };
  modify = (n) => {
    this.setState({
      count: n
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>{count}</div>
      <button onClick={() => this.modify( count + 1 )}>Increment<button>
    );
  }
}
```

### Hook을 사용한 방식

```js
import React, { Component, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
      <div>{count}</div>
      <button onClick={() => setCount( count + 1 )}>Increment<button>
  );
}
```

### 작동하는 방식

UseState는 2개의 아이템을 가진 배열을 반환하는데, 다음과 같음.  
`[값(value), 이를 변경하는 방법(setValueFunction)]`  
이를 다음과 같은 Naming Convention을 가지고 있음.  
`const [value, setValue] = useState()`

### 활용하기

```js
import React, { Component, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    const {
      target: {value}
    } = e;
    setEmail(value);
  };
  return (
      <div>{count}</div>
      <button onClick={() => setCount( count + 1 )}>Increment<button>
      <button onClick={() => setCount( count - 1 )}>Decrement<button>
  );
}
```

## Reference

### 본 프로젝트는 아래의 강의들을 기반으로 작성되었음을 밝힙니다

<https://nomadcoders.co/react-hooks-introduction/lobby>
<https://www.youtube.com/watch?v=yS-BU6eYUDE>

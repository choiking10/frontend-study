# 3-State

## Function Component to Class Component

이제 Food Component와 작별이야 ㅠㅠ

Class에 대한 설명은 생략!

```javascript
// Function Component to Class Component

class App extends React.Component {
  render() {
    return <h1>Im a class component</h1>;
  }
}
```

react는 자동적으로 모든 class component의 render method를 실행

## Class component의 state

Class Component를 사용해야하는 이유: `state` 때문!

`state`는 Object

Data가 바귀기 때문에 `state`를 사용해야 함.

바꿀 데이터를 `state`통해서 관리 가능.

나중에 State를 추가할수도 있음.

아래와 같이 동적으로 변하는 코드를 만들어 보자.

```javascript
class App extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
  // Not react code. This is javascript code.
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
}
```

이 코드에서 다음과 같이 쉽게 EventListener를 등록할수 있음! (Good!)

```javascript
<button onClick={this.add}>Add</button>
```

하지만 다음과 같은 코드는 `add` 나 `minus` 버튼을 클릭한다고 해도 랜더링된 숫자의 변화가 없음.

```js
class App extends React.Component {
  state = {
    count: 0,
  };
  // ...
  add = () => {
    this.state.count += 1;
  };
  minus = () => {
    this.state.count -= 1;
  };
}
```

그 이유는 state가 단순 Object로 React에서 실제로 변경됐는지 아닌지를 알수 없기 때문.
이 때문에 React가 State의 변경을 알 수 있도록 React가 제공하는 `setState` 함수를 사용해야 함.

react는 `setState`를 호출할 때마다 render 함수를 호출.

```js
add = () => {
  this.setState({ count: this.state.count + 1 });
};
minus = () => {
  this.setState({ count: this.state.count - 1 });
};
```

**경고! 이 방식은 좋은 방법이 아님.**

- state에 의존적
- 몇가지 성능 문제
- 쿨하지 않음

이를 좀더 쿨하게 해결할 수 있는 방법은 다음과 같이 `함수를 인자로 setState 호출`하는 것.

```js
add = () => {
  this.setState((current) => ({ count: current.count + 1 }));
};
minus = () => {
  this.setState((current) => ({ count: current.count - 1 }));
};
```

**_요약_**

- State를 직접적으로 사용하는 것은 좋지 않음.
- `setState`를 호출하는 것이 훨씬 나은 방법.
- react는 `setState`를 호출할 때마다 새로운 State로 다시 render function을 호출.
- 함수를 인자로 setState를 사용하는 것이 안전하고, 성능면에서 유리하며 fancy.

## Component Life Cycle

Life Cycle은 생성부터 호출, 그리고 소멸할 때까지의 Cycle을 의미.

![Life Cycle](images/3-State/ReactComponentLifecycle.jpg)

### Mounting

1. **constructor()**

   - 다음과 같은 상황에서 호출됨.
   - component가 mount 될 때
   - component가 screen에 표시될 때

2. **render()**
3. **componentDidMount()**

   - 이 component가 **처음** render 됐다는 사실을 알려주는 함수.

### Update

1. shouldComponentUpdate()

   - Component가 업데이트가 되어야하는지 결정함.

2. **render()**
3. **componentDidUpdate()**

   - Component의 update가 완료 됐다는 사실을 알려주는 함수.

### Unmounting

1. **componentWillUnmount()**

   - Component가 소멸하기 전에 호출됨.
   - 호출된다는데 실험결과 호출이안되는 경우도 있는듯?
   - 니콜라스가 믿으라고 했으나 사용전에는 항상 확인할 것.

### 적용해 보기

Mount 후 Data를 fetching 하기 위해 `componentDidMount()` 사용해보기

```js
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4000);
  }
  render() {
    const { isLoading } = this.state; // 매우 cool 한 문법인 걸
    return (
      <div>
        <div>{isLoading ? "Loading..." : "We are ready!"}</div>
      </div>
    );
  }
}
```

## Reference

### 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다

<https://nomadcoders.co/react-fundamentals>

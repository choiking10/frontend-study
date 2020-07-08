# Use State

## Introduction to useEffect

useEffect는 아래와 같음 함수의 역할을 하게됨.

- componentDidMount
- componentWillUpdate
- componentWillUnmount

useEffect는 2개의 인자를 받는데

첫번째는 function으로서의 effect  
두번째는 dependency임. 즉 deps가 있다면, effect는 deps 리스트에 있는 값이 변할때만 함수를 실행시켜줌.

```js
const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(() => sayHello(), [number]);
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};
```

다음 예제는 두개의 버튼이 있고, 버튼을클릭하면 그 값이 증가함.  
useEffect의 deps에는 `number`이 지정되어 있음.  
그 결과, `number`가 변할 때만 sayHello를 호출. aNumber가 변할 때는 호출이되지 않음.

## Reference

### 본 프로젝트는 아래의 강의들을 기반으로 작성되었음을 밝힙니다

<https://nomadcoders.co/react-hooks-introduction/lobby>

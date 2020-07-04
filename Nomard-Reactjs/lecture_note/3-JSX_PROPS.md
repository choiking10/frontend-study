## Component

HTML을 반환하는 함수

```javascript
// App.js
function App() {
  // component 대문자로 시작한다.
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}
function Potato() {
  return <h2>Potato</h2>;
}
//index.js
ReactDOM.render(<App />, document.getElementById("root"));
```

`<APP />`와 같은 형태로 Component를 사용함. 이런 형태를 JSX라고 함.

다음 처럼도 사용 가능

```javascript
import Potato from ".Potato";
function App() {
  // component 대문자로 시작한다.
  return (
    <div>
      <h1>App</h1>
      <Potato />
    </div>
  );
}
```

하지만 다음과 같은 것은 불가능함.

```javascript
//index.js
ReactDOM.render(<App /><Potato />, document.getElementById("root"));
```

오직 `한가지`의 Component만 랜더링이 가능함.  
따라서, 모든 컴포넌트는 App 안에 들어가야 함.

# Reference

## 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다.

https://nomadcoders.co/react-fundamentals

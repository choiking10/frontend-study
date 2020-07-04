# Component

HTML을 반환하는 함수
component는 항상 `대문자`로 시작한다.

```javascript
// App.js
function App() {
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

`<App />`와 같은 형태로 Component를 사용할 수 있음.  
이런 형태의 언어를 JSX라고 함.

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

# Properties (PROS)

컴포넌트에게 `props`를 전달할 수 있음.  
이는 일종의 Object로 컴포넌트에서 꺼내서 사용 가능함.

## props 전달

```javascript
<Food fav="Kimchi" />
```

## props를 사용

```javascript
// 1. using props like javascript object
function Food(props) {
  return <h1>I like {props.fav}</h1>;
}
// 2. open props (2개 이상 props를 꺼내는 건 안되나?) Food({fav1}, {fav2}) 처럼 ㅠㅠ
function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}
```

# Reference

## 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다.

https://nomadcoders.co/react-fundamentals

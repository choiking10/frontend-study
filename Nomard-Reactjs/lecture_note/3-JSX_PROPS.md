# JSX and Props

## Component

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

## Properties (PROS)

컴포넌트에게 `props`를 전달할 수 있음.  
이는 일종의 Object로 컴포넌트에서 꺼내서 사용 가능함.

### props 전달

```javascript
<Food fav="Kimchi" />
```

### props를 사용

```javascript
// 1. using props like javascript object
function Food(props) {
  return <h1>I like {props.fav}</h1>;
}
// 2. open props
function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}
// 3. open multiple
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="Kimchi" fav2="ramen" />
    </div>
  );
}
function Food({ fav1, fav2 }) {
  // {prop1, prop2, ...} like this
  return (
    <h1>
      I like {fav1}, and {fav2}
    </h1>
  );
}
```

## Dynamic Component Generation

## Map and Array

아는 내용이라 Skip

## Map and Array on JSX

JSX의 HTML 안에서 코드나 변수를 사용하고 싶을 때 `{}`를 사용할 수 있음.

```javascript
const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  //...
];
function Food({ fav, picture }) {
  return (
    <div>
      <h2>I like {fav}</h2>
      <img src={picture} />
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food fav={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}
```

### Error

위의 코드는 다음과 같은 에러가 발생함.

```python
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
    in Food (at App.js:46)
    in App (at src/index.js:5)
```

이는 react에서 사용하는 각 컴포넌트들은 Unique한 Key를 가져야하기 때문  
(완전히 이해한건아님 ㅠ)

이를 해결하기 위하여 다음과 같이 item들마다 `id`값을 지정해주고, props로 `key`를 넘겨주면 error를 해결할 수 있음.

이는 실제로 element를 확인해봤을때 전혀 표시되지 않는데, `key`는 `react 내부적`으로 사용하기 위해서임.

```javascript
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  // ...
}

function App() {
  // ...
  <Food key={dish.id} fav={dish.name} picture={dish.image} />
  // ...
}
```

## Reference

### 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다

<https://nomadcoders.co/react-fundamentals>

# ReactJS로 영화 웹 서비스 만들기

## Reference

### 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다.

https://nomadcoders.co/react-fundamentals

## Setup

### 설치

React의 초기 Setting 은 매우 복잡함. 이를 도와줄 `create-react-app`

```
npx create-react-app movie_app
cd movie_app
npm start
```

사용가능한 명령어들은 `pakcage.json`을 참고하면됨.

---

React의 크롬 개발자 도구 `React Developer Tools` 설치

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko-kr

### 필요없는 것들 삭제

index.js와 App.js를 아래와 같이 변경

```javascript
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

```javascript
// src/App.js
import React from "react";

function App() {
  return <div></div>;
}

export default App;
```

아래와 같은 프로젝트에 직접적으로 상관없는 것들을 삭제

```
logo.svg
serviceWorker.js
index.css
App.test.js
App.css
```

## How does react work?

Virtual Document Object Model (DOM)

- HTML에 직접 삽입

## JSX & PROPS

### Component

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

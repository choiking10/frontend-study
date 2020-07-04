# Setup

## 설치

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

## 필요없는 것들 삭제

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

# How does react work?

Virtual Document Object Model (DOM)

- HTML에 직접 삽입

# Reference

## 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다.

https://nomadcoders.co/react-fundamentals

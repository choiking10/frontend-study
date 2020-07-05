# 6-Routing

## 설치

- npm i react-router-dom

## 소스코드 재배치

`Movie.css`파일과 `Movie.js` 파일은 components 폴더로  
`App.js`와 `App.css`는 Home으로 이름을 바꾸어 routes 폴더로 이동시킴  
`About.js` 파일을 추가
그 상태로 의 `App.js` 파일을 새로 만듦.

따라서 다음과 같은 구조가 될 것.

- src

  - components

    - Movie.css
    - Movie.js

  - routes

    - Home.css
    - Home.js
    - About.js

  - App.js

App.js 파일은 다음과 같이 수정

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" exact={true} component={About}></Route>
    </HashRouter>
  );
}

export default App;
```

Routes는 path의 prefix가 매칭이 되면 해당 Component를 랜더링 해줌.  
이는 Footer나 Header를 만들때 매우 유용할 것으로 추측 됨.

## Building the Navigation

헤더처럼 동작하는 single page application으로 구현하기 위하여 Navigation component를 새롭게 구현할 것임.

```js
// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;

// src/App.js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    // <Header />
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" exact={true} component={About}></Route>
    </HashRouter>
    // <Footer />
  );
}

export default App;
```

그러면 페이지를 새로고침하지 않고도 필요로하는 페이지만 라우팅 시킬 수 있음.  
항상 Router 안에 Component를 추가하지 않아도 됨.

단! Link를 사용했다면 반드시 Router 안에 넣어야 함.

HashRouter 대신에 BrowserRouter를 사용할수도 있음.

- HashRouter는 `http://localhost:3000/#/about` 다음과 같이 표시됨.
- BrowserRouter는 `http://localhost:3000/about` 다음과 같이 표시됨.

단 BrowserRouter는 github page에 설정하기 힘듦.

따라서 본 프로젝트에서는 HashRouter를 사용.

## Sharing Props Between Routes

Route 될때 각 컴포넌트에 props가 넘어감.  
기본적으로 넘어가는 것은 다음과 같음.

- history
- location
- match

이를 다음과 같이 커스터마이징 할 수 있음.

```js
// src/components/Movie.js
function Movie({ id, year, title, summary, cover_image, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            cover_image,
            genres,
          },
        }}
      >
        ...
      </Link>
    </div>
  );
}

// src/routes/Detail.js

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { location } = this.props;
      const { year, title, summary, cover_image, genres } = location.state;
      return (
        <div>
          <img src={cover_image} alt={title}></img>
          <div>{year}</div>
          <div>{title}</div>
          <div>{summary}</div>
          <div>
            <ul>
              {genres.map((genre, index) => (
                <li key={index} className="genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

// src/App.js
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" exact={true} component={About}></Route>
      <Route path="/movie/:id" exact={true} component={Detail}></Route>
    </HashRouter>
  );
}
```

## Reference

### 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다

<https://nomadcoders.co/react-fundamentals>

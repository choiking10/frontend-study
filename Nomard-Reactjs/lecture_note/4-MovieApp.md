# 4-Making The Movie App

## 데이터 Fetching

일반적으로 javascript에서 데이터를 Fetch할 때 Fetch를 사용함.

하지만 이번 프로젝트에서는 fetch 위에서 동작하는 axios를 사용할 것.

```console
npm i axios
```

또한 우리는 YTS에서 제공하는 API를 사용할 것.

기본적으로 토렌트 사이트라 별로 좋아하진 않지만 Toy Project는 그냥 만들어보자.

사이트의 주소가 계속 변경되는 거보니 열심히 도망다니는 중인것 같은데 ㅎㅎ;

그래서 보니 니콜라스가 proxy를 만들어 줬다고 합니다.

<https://yts-proxy.now.sh/list_movies.json>

```js
import axios from "axios";

class App extends React.Component {
  // ...
  componentDidMount() {
    axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  //...
}
```

axios가 데이터를 가져오기까지 기다리기 위해서 다음과 같이 만들어볼 수 있음.

async와 await의 개념은 다른 강의나 구글링을 참고.

```js
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
```

여기서 다음과 같은 에러가 발생할 수 있음. 해결 방법은 아래를 참고  
[Go to Access-Control-Allow-Origin Error](##Access-Control-Allow-Origin-Error)

ES6 문법 중 아래는 정말 fancy 한듯. 가독성이 높은지는 조금 고민해볼만한 거 같기도하고

```js
const {
  data: {
    data: { movies },
  },
} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
```

---

State가 필요하지 않는 컴포넌트의 경우는 굳이 Class Component를 쓸 필요없기 때문에 Function Component를 사용.

또한 API를 참고하여 propTypes를 정의함.

```js
// Movie.js를 새로 만들자
function Movie({ id, year, title, summary, poster }) {
  return <h1>{title}</h1>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
```

```js
// App.js
class App extends React.Component {
  // ...
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <div>
          {isLoading
            ? "Loading..."
            : movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.poster}
                  />
                );
              })}
        </div>
      </div>
    );
  }
  // ...
}
```

## Access-Control-Allow-Origin Error

proxy로 접속할 때 `Access-Control-Allow-Origin` 헤더가 없다는 에러가 발생.

```python
Access to XMLHttpRequest at 'https://yts.mx/api/v2/list_movies.json' (redirected from 'https://yts-proxy.now.sh/list_movies.json') from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

이는 YTS의 공식 홈페이지의 API 페이지를 한번 접속하면 해결됨.

강의에 ISSUE를 달아두었음.

## Reference

### 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다

<https://nomadcoders.co/react-fundamentals>

# 5-Conclusions

## Deploying to Github Pages

### 설치

- npm i gh-pages

### Package.json 수정

```js
{
  //...
  "homepage": "https://{your_github_username}.github.io/{the_name_of_your_project_in_github}/"
  //...
}
```

```js
{
  // ...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
  // ...
}
```

## Reference

### 본 프로젝트의 코드는 아래 강의를 참고하여 작성된 것임을 밝힙니다

<https://nomadcoders.co/react-fundamentals>

## Test in React

---

### create-react-app으로 얻는 것

- React 라이브러리
- Webpack → 분리된 파일을 하나로 통합
- Babel → 최신 문법을 ES5로 변환
- Jest → 자동화 테스트

### 테스트 실행

간단한 테스트를 위해 아래의 App.test.js 파일에 아래 코드를 입력

```
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("Hello World!");

  ReactDOM.unmountComponentAtNode(div);
});
```

그리고 터미널에 `npm test run`을 입력시 테스트 진행

```
 PASS  src/App.test.js
  √ renders without crashing (36 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.524 s
```

- 진행 순서
  1. 터미널에 `npm run test`입력
  2. Jest가 테스트를 시작
  3. Jest는 .test.js 형식의 모든 test 파일을 검색하고 해당 파일들을 실행시킴
  4. Jest는 터미널에 테스트 결과를 표출함
  5. Jest는 테스트되었던 파일에 변경이 있는 경우 감지하여 테스트 재진행

### 어떤 것을 테스트해야할까?

Jest로 테스트를 실행하면 런타임 이전에 오류 잡아 양질의 서비스를 제공할 수 있는 점에서 이득이 있다는 것은 이해했다.
그렇다면 우리는 테스트파일에서 `어떤 것을 테스트 해야할까?`

테스트 해야할 사항을 정할 때 다음을 진행해보자. 어떤 것을 테스트 코드로 작성해야할지 고민될 때 도움이 될 것이다.

- **진행과정**
  1. 전체 앱을 기능 단위로 분류한다.

     ex. 새로운 코멘트 추가 기능을 담당하는 CommentBox 컴포넌트, 전체 코멘트를 나열하는 CommentList 컴포넌트 등

  2. 각 기능에서 코드별로 처리하는 기능이 무엇인지 다른 사람에게 설명해주는 상상해본다.
  3. 내가 예상한 기능을 테스트 파일에 작성한다.

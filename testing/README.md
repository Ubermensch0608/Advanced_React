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

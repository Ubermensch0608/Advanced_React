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

### 테스트 폴더구조 컨벤션

테스트 파일을 관리하는 방법은 각자의 취향 혹은 프로젝트 성격마다 다를 것이다. 하지만, 많은 개발자들은 다음과 같은 방법으로 테스트 파일을 관리한다.

```
src
├ components
└ 이것저것  └ __ test __

```

**test**폴더 안의 테스트 파일은 .test.js의 형식을 취하지 않아도 Jest가 테스트 파일로 인식한다. 하지만, .test.js 확장자를 설정하는 것이 직관성을 위해 좋을 것이다.

### 테스트 코드 구조

![test-file-structure]('./../public/md-source/test-file-structure.png)

- **구성**

  - it은 전역함수로 두 가지 내용을 담는다.
  - 첫 번째 요소는 테스트에 대한 설명이다. 테스트를 진행했을 때 터미널에 표시되는 문구를 기입하면 된다. 협업에서는 어떤 것에 대한 테스트인지 동료가 의도를 쉽게 알 수 있도록 설명하는 것이 좋을 것이다.
  - 둘째 요소는 실제 test를 진행하는 코드가 담기는 구역이다. 그 안에는 다음과 같은 형식의 코드가 담긴다.

    ```
    it("shows a comment box", () => {
    const div = document.createElement("div");

    ReactDOM.render(<App />, div);

    // Looks inside the div
    // and checks to see if the CommentBox is in there

    ReactDOM.unmountComponentAtNode(div);
    });

    ```

    npm run test는 브라우저 상에서 실행하는 것이 아니기 때문에 실제 DOM이 생성되는 것은 아니다. 그 대신에

    1. fake div를 설정한다.(첫 째줄)
    2. 그 안에 <App/>을 렌더링한다.
    3. 기능이 예상대로 작동되는지 test코드를 작성한다 // 생략
    4. fake div를 삭제하여 부수효과 혹은 테스트 시간을 최소화한다.

### 테스트 제한범위

App.test.js에서 모든 컴포넌트의 테스트를 진행하면 어떻게 될까?

테스트 중 오류가 발생하여도, 프로젝트가 작거나 테스트 로직이 복잡하지 않을 경우에 어떤 부분을 수정해야할지 알아차리기 쉽다.

하지만, 그렇지 않을 경우 예측 가능성이 줄어들며, 유지보수성이 떨어지게 된다. 따라서 App.test.js와 같이 전체 컴포넌트 테스트 파일에서 각 컴포넌트에 해당하는 기능을 테스트 하는 것은 좋지 않다.

그 대신 **각 컴포넌트가 렌더링 되고 있는지**정도의 범위에서만 테스트하고, 세부 기능은 그 기능을 담당한 컴포넌트의 테스트 파일에서 진행하는 것이 유지보수성을 향상시킬 수 있다.

### Enzyme

출처:
<a href='https://enzymejs.github.io/enzyme/'>Enzyme 공식문서 - Airbnb</a>

<a href='https://medium.com/wesionary-team/react-testing-library-vs-enzyme-afd29db380ac'>React Testing Library Vs. Enzyme</a>

Enzyme은 Airbnb에서 만든 인기있는 테스팅 라이브러리이다. 이것은 우리에게 리액트 컴포넌트의 실행 세부사항을 테스트하는 메커니즘을 제공한다. 우리는 이것을 통해 테스트 코드에 적은 컴포넌트와 자식 컴포넌트의 state, props 등에 쉽게 접근할 수 있다.

즉, Enzyme을 사용하면 손쉽게 세부 테스팅 코드에 접근 및 설정이 가능한 것이다.

이러한 이점으로 많은 개발자들이 Enzyme을 사용하고, 나 역시 Enzyme을 사용함으로써 테스트 코드 작성의 편의성을 높이려고 한다.

- **dependency 설정**

  ```
  npm i --save enzyme enzyme-adapter-react-'자신의 react 버전'
  ```

  ex. 만약 react 버전이 v16.xx.xx 일 경우 `enzyme-adapter-react-16` 으로 설치하면 된다.

  **※ react v17.xx.xx인 경우 `npm i --save enzyme @wojtekmaj/enzyme-adapter-react-17` 으로 설치한다.**

- **사용법**

  ```
  import Enzyme from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  Enzyme.configure({ adapter: new Adapter() });
  ```

### Full Rendering API(mount(...))

<a href='https://enzymejs.github.io/enzyme/docs/api/mount.html'>Enzyme 공식문서 - Full Rendering API</a>

![test-file-structure]('./../public/md-source/enzyme-api-structure.png)

Full DOM redering은 우리가 DOM API와 상호작용할 컴포넌트를 갖는 경우에 이상적이다. 또는, 상위 컴포넌트에 감싸져 있는 컴포넌트를 테스트해야할 때 사용한다.

Full DOM은 이것이 전역 스코프에서 사용가능한 것을 요구한다. 이것은 Full DOM이 브라우저 처럼 보이는 환경에서 구동되어야하는 것을 의미한다. 만약 우리가 브라우저 안에서 테스트 실행을 원하지 않는다면, `mount`를 사용하기 위한 권장 접근법은 JS에서 완전히 구현된 헤드리스 브라우저인 `jsdom`이라 불리는 라이브러리에 의존하는 것이다.

| **Note**: `shallow`또는 `static`렌더링과는 달리, `full`렌더링은 실제로 그 컴포넌트를 DOM에 마운트한다. 이것은 만약 그 컴포넌트들이 모두 같은 DOM에서 사용된다면, 테스트가 서로에게 영향을 미칠 수 있는 것을 의미하는 것이기도 하다. 그렇기 때문에 우리가 테스트를 작성하는 과정에서 필요하다면, `unmount()`와 비슷한 클린업 처리를 잊지 않아야한다.

```
import { mount } from 'enzyme';
import sinon from 'sinon';
import Foo from './Foo';

describe('<Foo />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount((
      <Foo onButtonClick={onButtonClick} />
    ));
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
```

### describe

- 중복되는 코드와 사이드 이펙트를 방지하기 위해 사용
- 일반적인 코드 양식을 그룹으로 사용할 수 있게 해줌
- 그룹을 만들 수 있는 이점 뿐 아니라 beforeEach 등의 scope를 제한할 수 있는 목적이 있음
- 요소
  - 첫 번째: 그룹이 추구하는 것에 대한 설명
  - 두 번째: 스코프를 제한하여 테스트 할 익명 함수

### 테스트의 흐름

테스트를 시작하면 다음과 같은 흐름으로 진행된다.

![test-flow-1]('./../public/md-source/test-flow-1.png)

- 첫 번째 beforeEach로 현재 테스트 파일의 모든 테스트는 각각 공통으로 실행시키는 조건을 부여 받는다.
- 마찬가지로 모든 테스트는 afterEach로 테스트가 종료된 후 공통으로 실행하는 조건을 부여 받는다.

![test-flow-2]('./../public/md-source/test-flow-2.png)

세 가지 테스트를 나누어 본다면 흐름은 다음과 같다.

- 첫 번째 테스트는 decribe로 묶여 있지 않아, 첫 번째 beforeEach만 흐름에 포함된다.
- 반면, 나머지 테스트는 'the text area'라눈 describe로 묶여 있으며, 해당 지역 스코프에 생성된 두 번째 beforeEach의 적용을 받고 테스트를 진행하는 흐름을 확인할 수 있다.

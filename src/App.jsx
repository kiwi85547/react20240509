// built-in component : html 의 기본 요소, 소문자로 시작
// component : 직접만든 요소(태그), 대문자로 시작

// component 는 return 을 가진 함수
function MyComponent() {
  // return : 화면에 출력할 코드
  return <div>hello component</div>;
}

function MyComp() {
  // JSX : Javascript XML
  // JSX 코드 : <div></div> 처럼 태그를 사용한 코드

  const myElem = <h1>hi jsx</h1>;

  return myElem;
}

function App() {
  // 한 줄 주석
  /* 여러 줄 주석 */

  // component 사용시 종료 태그 생략할 수 없음
  // br 같은 빈 요소는 시작태그에서 꼭 종료

  return (
    <>
      <div>
        {/* jsx 내에서의 주석 */}
        {/* 단축키 : ctrl+/ */}

        {/* 주석 */}
        <h1>
          hello
          <br />
          react 안녕
        </h1>
        <h2>하이 리액트</h2>
        <p>react</p>
        <p>냠냠</p>
        <MyComponent />
        <MyComp />
      </div>
    </>
  );
}

export default App;

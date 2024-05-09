function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment <></>사용

  return (
    <>
      <p>Lorem ipsum.</p>
      <p>Nisi, perferendis.</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  // 여러 줄 써야한다면, div로 감싸서 쓰기
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Cumque, iste!</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄 일 때 () 사용
  // prettier가 도움을 준다
  return (
    <div>
      hello tag
      <p>lorem</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;

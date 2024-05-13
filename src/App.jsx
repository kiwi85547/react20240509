import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState({ name: "son" });
  function updateVal() {
    // 상태가 바뀌면 다시 그림
    // 새 객체를 만들어서
    // 기존의 상태
    val.name = "lee";
    // 새로 바뀐 상태
    setVal(val);
  }
  return (
    <div>
      {val.name}
      <button onClick={updateVal}>클릭</button>
    </div>
  );
}
function MyComp2() {
  const [val, setVal] = useState({ name: "son" });
  function updateVal() {
    // 객체를 복사해서 새 객체를 만들어 써야함
    const { ...newVal } = val; // 얕은 복사
    newVal.name = "lee";
    setVal(newVal);
  }
  return (
    <div>
      {val.name}
      <button onClick={updateVal}>클릭</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;

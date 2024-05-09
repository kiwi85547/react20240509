import React from "react";

function App(props) {
  // 배열 메소드
  const a = [];

  // push : 새 값을 배열 맨 뒤에 추가
  a.push("흥민");
  a.push("강인");
  a.push(3.11);
  console.log(a);

  // pop : 맨 뒤의 값을 제거 후 리턴
  let val1 = a.pop();
  let val2 = a.pop();
  console.log(val1);
  console.log(val2);
  console.log(a);

  // map : 각 원소를 다른 값으로 매핑(map) 후 새 배열 리턴
  const b = [5, 4, 3, 2, 1];
  console.log(b);
  // 함수를 정의하고 넣음
  function action(param) {
    return param * 2;
  }
  const c = b.map(action);
  console.log(b);
  console.log(c);

  //
  const d = b.map(function (param) {
    return param * 3;
  });
  console.log(d);

  let aa = b.map(action);
  console.log(aa);

  let bb = b.map((a) => a * 7);
  console.log(bb);

  return <div></div>;
}

export default App;

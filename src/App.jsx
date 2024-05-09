import React from "react";

function App(props) {
  // object
  const a = { name: "John" };
  const b = a;

  console.log(a === b); // 항상 true

  console.log("a.name", a.name); //John
  console.log("b.name", b.name); //John

  // javascript도 참조값을 가지고 있음
  b.name = "Jane";
  console.log(a === b); // 항상 true. 객체가 바뀐것이 아님..

  console.log("a.name", a.name); //Jane
  console.log("b.name", b.name); //Jane

  return <div></div>;
}

export default App;

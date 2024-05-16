import React from "react";

function App(props) {
  // JSON(JavaScript Object Notation)
  // JavaScript Object 작성법을 빌린
  // Text(문자열) 형식의 데이터

  // JSON 데이터 타입
  // 문자열, 수, 불리언, 객체, 배열, null

  // JSON의 프로퍼티명은 큰 따옴표로 묶음

  // 직렬화(stringfy, encode, Serialization) : 객체 -> JSON(문자열)
  // 역직렬화(parse,decode, deserialization) : JSON(문자열) -> 객체

  // 직렬화 예)
  const obj1 = { name: "son", age: 33 };
  const json1 = `{"name":"son","age":33}`;

  const obj2 = { name: "sua", age: 10 };
  const json2 = JSON.stringify(obj2);

  console.log(obj2);
  console.log(json2);

  return <div></div>;
}

export default App;

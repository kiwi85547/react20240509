import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "johhn@a.com",
    password: "1234",
  };

  return (
    <div>
      {/*  obj의 각 프로퍼티를 jsx 내에서 출력하는 코드 작성*/}
      나이 : {obj.age} <br /> 이름 : {obj.name} <br />
      이메일 : {obj.email} <br /> 패스워드 : {obj.password}
    </div>
  );
}

export default App;

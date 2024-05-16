import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState({});

  function handleClick1() {
    const obj1 = { name: "kim", age: 20 };
    // const json1 = JSON.stringify(obj1);

    // axios가 두번째 파라미터가 객체면 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const obj2 = {
      name: "hwayeong",
      team: "family",
      id: 1,
      address: { city: "seoul", country: "Korea" },
    };

    axios.post("/api/main41/sub2", obj2);
  }

  function handleClick3() {
    // 변수명이 프로퍼티명과 같을 때 생략 가능
    // const data = {name,city}
    axios.post("/api/main41/sub3", { name, city });
  }

  function handleClick4() {
    axios.post("/api/main41/sub4", { phone, state });
  }

  return (
    <div>
      <button onClick={handleClick1}>요청(json 데이터 포함)</button>
      <button onClick={handleClick2}>클릭</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>JSON 형식으로 요청</button>
      </div>
      <div>
        <input type="number" onChange={(e) => setPhone(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setState(e.target.value)} />
        <br />
        <button onClick={handleClick4}>spring으로 보내기</button>
      </div>
    </div>
  );
}

export default App;

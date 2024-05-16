import React from "react";
import axios from "axios";

function App(props) {
  // json 데이터 타입
  // 문자열, 수, 불리언, 객체, 배열, null

  function handleClick1() {
    const data = {
      name: "son",
      age: 33,
      married: false,
      team: { location: "london", name: "토트넘" },
      item: [0, 1, 2, 3, 4, "가", "나", "다"],
      address: null,
    };
    axios.post("/api/main41/sub5", data);
  }

  function handleClick2() {
    axios.post("/api/main41/sub6", {
      name: "son",
      age: 33,
    });
  }

  function handleClick3() {
    axios.post("/api/main41/sub7", {
      id: 1,
      alphabet: { a: "a", b: "b" },
      한글: ["가", "나", "다"],
      point: null,
      info: {
        name: "jaehoo",
        age: 7,
      },
    });
  }

  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
      <button onClick={handleClick2}>click</button>
      <br />
      <button onClick={handleClick3}>json데이터 요청 연습</button>
    </div>
  );
}

export default App;

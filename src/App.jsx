import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    // ajax get 요청
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    // ajax post 요청
    axios.post("/api/someurl");
  }

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }
  function handleClickButton4() {
    axios.post("/api/someurl2");
  }

  function handleClickButton5() {
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "son");
    // toString 써도 되고 안써도 됨
    // axios.get("/api/someurl3?"+params);
    axios.get(`/api/someurl3?${params}`);
  }

  function handleClickButton6() {
    const params = new URLSearchParams();
    params.append("id", 5);
    params.append("name", "cho");
    params.append("city", "seoul");
    axios.post("/api/someurl3", params);
  }

  function handleClickButton7() {
    const params = new URLSearchParams();
    params.append("title", "physical");
    params.append("sound", "JIMMER");
    params.append("song", "조화영");
    // ? 물음표 꼭 쓰기
    axios.get("/api/someurl4?" + params);
  }

  function handleClickButton8() {
    const params = new URLSearchParams();
    params.append("book", "react");
    params.append("mouse", "logitech");
    params.append("monitor", "samsung");
    axios.post("/api/someurl4", params);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      <button onClick={handleClickButton3}>get 요청2</button>
      <button onClick={handleClickButton4}>post 요청2</button>
      <button onClick={handleClickButton5}>get 요청 with query string</button>
      <button onClick={handleClickButton6}>post 요청 with data</button>
      <button onClick={handleClickButton7}>get 요청 with data</button>
      <button onClick={handleClickButton8}>post 요청 with data</button>
    </div>
  );
}

export default App;

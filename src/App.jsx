import React from "react";
import axios from "axios";

function App(props) {
  function handle200() {
    axios.get("/api/main43/sub1").then((response) => console.log(response));
  }

  function handle400() {
    // then 파라미터에는 response 객체
    // catch 메소드는 error 객체
    axios
      .get("/api/main43/sub2")
      .then(() => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못된 요청압니다.");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청입니다");
        } else if (err.response.status === 500) {
          console.log("서버에서 오류가 발생하였습니다.");
        }
      });
  }

  function handle500() {}

  function handleClick() {
    const r = Math.random();
    let path = "";
    if (r < 1 / 3) {
      path = "/api/main43/sub1";
    } else if (r < 2 / 3 && r > 1 / 3) {
      path = "/api/main43/sub3";
    } else {
      path = "/api/main43/sub4";
    }

    axios
      .get(path)
      .then(() => console.log("정상적인 접근입니다"))
      .catch((error) => {
        const code = error.response.status;
        switch (code) {
          case 401:
            console.log("401 응답입니다. 로그인되지 않았습니다.");
            break;
          case 403:
            console.log("403 응답입니다. 권한이 없습니다.");
            break;
        }
      })
      .finally(() => {
        console.log("항상 실행되는 메소드");
      });
  }

  return (
    <div>
      <button onClick={handle200}>200응답</button>
      <button onClick={handle400}>400응답</button>
      <button onClick={handle500}>500응답</button>
      {/*  200,401,403번 응답일 때 각각 다른 일하는 코드 작성*/}
      <button onClick={handleClick}>응답 코드에 따라 다른 일 하기</button>
    </div>
  );
}

export default App;

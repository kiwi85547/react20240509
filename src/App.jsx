import React from "react";

let son = {
  firstName: "손",
  lastName: "흥민",
  address: "런던",
  country: "영국",
  married: false,
};

function App(props) {
  return (
    <div>
      <ul>
        <li>성 : {son.firstName}</li>
        <li>이름 : {son.lastName}</li>
        <li>주소 : {son.address}</li>
        <li>국가 : {son.country}</li>
        <li>결혼여부 : {son.married ? "기혼" : "미혼"}</li>
      </ul>
    </div>
  );
}

export default App;

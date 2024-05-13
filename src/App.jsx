import React from "react";

function MyComp({ name, age, children }) {
  console.log(name); // son
  console.log(age); // 33
  console.log(children); // undefined
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{children}</div>
    </div>
  );
}

function App(props) {
  return (
    <>
      <MyComp name={"son"} age={33}>
        {/* content는 children prop */}
        <p>Lorem ipsum dolor.</p>
      </MyComp>
      <MyComp name={"lee"} age={22}>
        <ul>
          <li>Lorem.</li>
          <li>Et!</li>
        </ul>
      </MyComp>
    </>
  );
}

export default App;

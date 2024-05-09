import React from "react";

function App(props) {
  const s1 = "some string";
  const s2 = "other string";
  const s3 = "I'm string";
  const s4 = '"리액트"공부 중';

  // backtick
  // template literal
  const s5 = `another string`;

  const name = "son";
  const age = 30;

  const s6 = name + " is " + age * 2 + " years.";
  const s7 = `${name} is ${age * 2} years.`;

  return (
    <div>
      <p>{s6}</p>
      <p>{s7}</p>
    </div>
  );
}

export default App;

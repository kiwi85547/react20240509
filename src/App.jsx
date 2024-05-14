import React, { useState } from "react";

function MyBox({ color }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <button onClick={() => setCount(count + 1)}>up</button>
        <p>{count}</p>
      </div>
    </div>
  );
}

function App(props) {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <input
        type={"checkbox"}
        value={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {checked && <MyBox color={"#ccc"} />}
    </div>
  );
}

export default App;

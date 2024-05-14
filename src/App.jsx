import React, { useState } from "react";

function MyBox({ color, count, onclick }) {
  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <button onClick={onclick}>up</button>
        <p>{count}</p>
      </div>
    </div>
  );
}
// todo : MyBox가 tree 에 떨어진 후 다시 붙어도 count 상태가 유지될 수 있도록 코드 수정
function App(props) {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(true);

  // setCount를 바로 넘겨주지 않고 함수를 전달하는 방법을 더 많이 씀
  function handleUpdateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <input
        type={"checkbox"}
        value={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {checked && (
        <MyBox color={"#ccc"} count={count} onclick={handleUpdateCount} />
      )}
    </div>
  );
}

export default App;

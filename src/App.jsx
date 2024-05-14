import React, { useState } from "react";

function MyButton({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CLICK</button>
    </div>
  );
}

function MyBox({ count }) {
  return <div>{count}번 클릭됨</div>;
}

function App(props) {
  const [count, setCount] = useState(0);

  // 함수로 빼도 됨
  // function handleUpdateCount() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <MyButton count={count} setCount={setCount} />
      <hr />
      <MyBox count={count} />
    </div>
  );
}

export default App;

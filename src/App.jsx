import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("s");
  }, []);
  useEffect(() => {
    console.log("count가 변경될 때 ", count);
    // 함수안에서 count 변경하면 안됨. 무한루프
    // setCount(count+1)
    // dependency가 변경되지 않도록 주의
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default App;

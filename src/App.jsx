function App() {
  // 변수
  // const, let 중에 사용
  const myTag = <h1>hello</h1>;
  const val1 = "흥민";
  const val2 = 3.14;
  const val3 = 456;
  const val5 = true;
  const val6 = null;
  const val7 = undefined;
  const val8 = [2, 3];
  const val9 = { age: 3, name: "강인" };

  // {} : jsx 내에서 javascript 코드 사용
  return (
    <>
      <p>
        {val1} 선수는 연봉이 {val3}억원이다.
      </p>
      <div>{val1}</div>
      <div>{val2}</div>
      <div>{val3}</div>
      <div>{myTag}</div>
      {/*boolean 은 출력 안됨*/}
      <div>{val5}</div>
      {/*null은 출력 안됨*/}
      <div>{val6}</div>
      {/*undefined 출력 안됨*/}
      <div>{val7}</div>

      {/*23으로 출력됨*/}
      <div>{val8}</div>

      {/*객체는 오류*/}
      {/*<div>{val9}</div>*/}
      {/*프로퍼티에 접근해서 사용*/}
      <div>{val9.name}</div>
      <div>{val9.age}</div>
    </>
  );
}

export default App;

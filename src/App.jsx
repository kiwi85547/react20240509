function App() {
  // javascript review

  // javascript data type
  let a; // 값을 안 주면 undefined
  console.log("a", a);
  let b = "문자열 타입"; //string
  console.log("b", b);

  // 정수형,실수형으로 나누어 지지 않음
  let c = 3; //number 타입
  console.log("c", typeof c);
  let d = 3.14; // number 타입.
  console.log("d", typeof d);
  let e = true; // boolean 타입
  console.log("e", typeof e);

  let f = {}; // object 타입
  console.log("f", typeof f);

  let g = function () {}; // function 타입
  console.log("g", typeof g);
  // 자바스크립트에서는 값이 들어갈 때 타입이 확정 됨
  g = {};
  console.log("g", typeof g);

  return <div></div>;
}
export default App;

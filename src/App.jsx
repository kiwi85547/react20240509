import React from 'react';

function App(props) {
    // destructuring assignment
    // (구조) 분해 할당

    // 자바스크립트의 데이터 타입 string, number, undefined, object({},[])
    // object({},[])를 분해해서 할당
    // object(객체)는 두종류가 있음 []는 배열
    // {}는 프로퍼티 이름과 값, 쌍으로 이루어짐
    // 프로퍼티의 값을 변수에 할당

    const a = {name: "son", age: 33};
    const aName = a.name;
    const aAge = a.age;
    // const { name: aName, age: aAge } = a;

    console.log("aName", aName);
    console.log("aAge", aAge);

    const {name: bName, age: bAge} = a;
    // const bName = a.name;
    // const bAge = a.age;

    console.log("bName", bName);
    console.log("bAge", bAge);

    return (<></>
    );
}

export default App;
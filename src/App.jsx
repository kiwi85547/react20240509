import React from 'react';

function App(props) {
    let numberArray = [1, 2, 3];

    numberArray.push("king");
    numberArray.push("Queen");
    numberArray.pop();
    console.log(numberArray);
    console.log(
        // 적어도 하나의 매개변수를 입력해야 함
        numberArray.findIndex((item) => {
            return item === 'king'; // 3
        })
    )
    // 중괄호 내의 함수 본문에서 무언가를 반환하기만 하는 화살표 함수는 코드 길이를 더 줄일 수 있다.
    // return 문 삭제, 중괄호 삭제
    const index = numberArray.findIndex((item) => item === "king");
    console.log(index);

    // map 메소드
    // 배열의 모든 원소를 다른 원소로 변환 가능 (다른 유형의 원소로 변환 가능. 예)객체,스트링,부울 값 등)
    // findIndex와 마찬가지로 함수를 입력 받음
    const edit1 = numberArray.map(item => item + "!")
    console.log("edit1 " + edit1);

    // 객체로 변환 하고 싶을 때 ({}) 소괄호로 감싸야 함.
    // 그렇지 않으면, 함수 본문을 감싸는 중괄호로 취급 됨
    // 화살표 함수가 반환하는 새 객체로 정의하는 것임을 나타낼 수 있음
    const edit2 = edit1.map(item => ({item: item, edit1: edit1, text: item}));
    console.log(edit2);


    // 숫자 목록을 자바스크립트 객체 목록으로 변환하는 transformToObjects() 함수
    function transformToObjects(numberArray) {
        return numberArray.map(number => {
            return {val: number}
        });
    }

    // JSX내에서 호출되어야 올바르게 작동함
    function arrowExercise(numberArray) {
        return numberArray.map(num => ({Arrow: num}));
    }

    console.log(arrowExercise(numberArray))


    console.log(transformToObjects(numberArray))
    // 0 : {val: 1}
    // 1 : {val: 2}
    // 2 : {val: 3}

    return (
        <div>
            {/*실행 안됨.. 이유 찾아보기..*/}
            {transformToObjects(numberArray).map((item, index) => (
                <p key={index}>{item.number}</p>
            ))}
        </div>)
}

export default App;
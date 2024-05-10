import React from 'react';
import {Button, ChakraProvider} from "@chakra-ui/react";

function App(props) {
    // 이름 있는 함수
    function action1(){
        console.log("action1 함수");
    }
    // action1(); // 함수 실행.. 없어도 상관없는데??

    // 이름 없는 함수
    const action2=function(){
        console.log("anonymous function. 변수 이름은 action2");
    };

    const arrow = ()=>console.log("arrow");

    return (
        <div>
            {/*함수 이름이 action1*/}
            <button onClick={action1}>onClick property에 이름 있는 함수 넣기</button><br/>
            {/*익명함수 변수 이름이 action2*/}
            <button onClick={action2}>onClick property에 이름 없는 함수 넣기</button><br/>
            <button onClick={function(){
                console.log("onClick property에 return문 안쪽 익명함수 넣기")
            }}>클릭3</button><br/>
            <button onClick={arrow}>onClick property에 arrow function 변수에 담아서 넣기</button><br/>
            <button onClick={()=>console.log("arrow함수")}>onClick property에 arrow function 바로 넣기</button>
        </div>
    );
}

export default App;
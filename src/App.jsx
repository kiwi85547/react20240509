import React from 'react';

function App(props) {
    // object ({}, [])
    // 나머지 모두 (rest property)
    // ...변수명

    const a = {
        name: "John",
        email: "john@example.com",
        password: "password",
        address: "gangnam",
    };

    // 나머지 모두가 b라는 객체에 들어감
    // b는 나머지 배열 요소들이 저장된 새로운 배열이 된다
    const {name, email, ...b} = a;
    console.log("name", name);
    console.log("email", email);
    console.log("b.password", b.password); // "password"
    console.log("b.address", b.address); // "gangnam"

    // 연습 :
    const c = {
        city: "seoul",
        country: "US",
        price: 500,
        category: "food",
    };
    // 작성!
    const {price, ...d} = c;

    console.log("price", price); // 500
    console.log("d.city", d.city); // "seoul"
    console.log("d.country", d.country); // "US"
    console.log("d.category", d.category); // "food"
    return (<></>
    );
}

export default App;
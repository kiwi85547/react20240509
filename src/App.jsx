import React from 'react';

function App(props) {
    // address 프로퍼티가 객체
    const a = {
        name: "John",
        age: 44,
        address: {
            street: "Lorem Ipsum",
            city: "seoul",
        }
    };

    // 얕은 복사 (shallow copy)
    // 가장 상위의 프로퍼티들만 복사. 안에 있는것은 복사되지 않음
    const {...b} = a;
    b.age = 55;
    console.log("b.age", b.age); // 55
    console.log("a.age", a.age); // 44

    b.address.city = "busan";
    console.log("a.address.city", a.address.city); // busan
    console.log("b.address.city", b.address.city); // busan

    // 깊은 복사 (deep copy)
    // 얉은 복사를 여러번 해서 해결
    const {...c} = a; // 얉은 복사
    const {...address1} = a.address; // 얉은 복사
    c.address = address1; // 깊은 복사
    c.address.city = "london";
    console.log("a.address.city", a.address.city); // busan
    console.log("c.address.city", c.address.city); // london

    // 연습; 깊은 복사
    const d = {
        company: {
            name: "apple",
            location: "us",
        },
        name: "iphone",
        price: 300,
    };

    // 코드 작성 : d 객체를 e 객체로 깊은 복사
    const {...e} = d;
    const {...company1} = d.company;
    e.company = company1;

    e.name = "galaxy";
    e.company.name = "samsung";

    console.log("d.name", d.name); // iphone
    console.log("d.company.name", d.company.name); // apple
    console.log("e.name", e.name); // galaxy
    console.log("e.company.name", e.company.name); // samsung


    return (<></>
    );
}

export default App;
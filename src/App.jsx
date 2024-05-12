import React from 'react';

function App(props) {
    // 나머지 모두 문법으로 객체 복사
    // 프로퍼티는 순서가 없음

    const a = {
        name: "son",
        age: 33,
        city: "london",
    };
    const b = a; // a와 b는 같은 객체 참조
    b.age = 44;
    console.log("b.age", b.age); // 44
    // 같은 객체를 참조하고 있으므로 a의 값도 같이 변경됨
    console.log("a.age", a.age); // 44

    // 구조분해할당이 없으면
    const c = {
        name: a.name,
        age: a.age,
        city: a.city,
    };
    c.age = 55;
    console.log("c.age", c.age); // 55
    console.log("a.age", a.age); // 44

    // 구조분해할당을 이용하면
    // a의 나머지 모두 프로퍼티가 복사해서 들어감
    // 객체의 각 프로퍼티를 복사
    const {...d} = a;
    d.age = 66;
    console.log("d.age", d.age); // 66
    // 각 프로퍼티의 값을 각각 복사해 담았으니
    // a.age는 44로 남아있음
    console.log("a.age", a.age); // 44

    // 연습:
    const e = {
        name: "lee",
        country: "korea",
        team: "paris",
        salary: 700,
        city: "seoul",
    };
    // 코드 작성!
    const {...f} = e;

    e.city = "busan";
    // {
    //   name: "lee",
    //     country: "korea",
    //     team: "paris",
    //     salary: 700,
    //     city: "busan",
    // }
    console.log(e);
    /*
{
  name: "lee",
  country: "korea",
  team: "paris",
  salary: 700,
  city: "seoul",
}
 */
    console.log(f);

    return (<></>
    );
}

export default App;
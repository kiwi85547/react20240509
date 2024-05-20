import React, {useState} from 'react';

function App(props) {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("hello");
    const [text3, setText3] = useState("hi");
    const [text4, setText4] = useState("hi");
    const [text5, setText5] = useState("hi");

    return (
        <div>
            <div><input type="text" onChange={e => setText1(e.target.value)}/></div>
            <div><input type="text" value={text2} readOnly={true}/></div>
            <div><input type="text" defaultValue={text3}/></div>
            <div><input type="text" value={text5}/></div>
        </div>
    );
}

export default App;
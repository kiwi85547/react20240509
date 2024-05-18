import React, {useState} from "react";

function App(props) {
    // input에 입력된 값이 p에 출력되도록 코드 작성
    const [name, setName] = useState();
    const [text, setText] = useState();

    function handlerUpdate(e) {
        setName(e.target.value);
    }

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handlerUpdate} style={{color: "skyblue"}}/>
            <p>{name}</p>
            <div>
                <input type="text" onChange={handleChange}/>
                <p style={{color: "darkseagreen"}}>{text}</p>
            </div>
            <div>
                <input type="text" onMouseEnter={e => setText(e.target.value)} style={{color: "darkred"}}/>
            </div>
        </div>
    );
}

export default App;

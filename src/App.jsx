import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext(null);

function MyInput() {
  const textHandler = useContext(MessageContext);
  return (
    <div>
      <input
        type="text"
        value={textHandler.text}
        onChange={(e) => textHandler.updateText(e.target.value)}
      />
      <p>{textHandler.text}</p>
    </div>
  );
}

function MyText() {
  const textHandler = useContext(MessageContext);
  return (
    <div>
      <p>{textHandler.text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(t) {
    setText(t);
  }
  return (
    <div>
      {/*객체의 프로퍼티와 값으로 넣는 값이 같으면 생략 가능하다. 예) text:text*/}
      <MessageContext.Provider
        value={{ text: text, updateText: handleUpdateText }}
      >
        <MyInput />
        <MyText />
      </MessageContext.Provider>
    </div>
  );
}

export default App;

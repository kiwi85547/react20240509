import React, { createContext, useContext, useState } from "react";

// 1. create the context
const MessageContext = createContext("");

function MyBox() {
  // 2. use the context
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}

function MySection() {
  return <MyBox />;
}

function MyContainer() {
  return <MySection />;
}

function App(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <hr />
      {/*3. provide the context*/}
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;

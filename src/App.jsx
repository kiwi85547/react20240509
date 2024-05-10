import React from "react";
function MyButton({name,sx}){
    return <button style={sx}>{name}</button>;
}

function App(props) {
  return (
    <div>
        <MyButton name={"red button"} sx={{
        backgroundColor: "red",
        color: "green",
        padding:"10px"}
        }/>

    </div>
  );
}

export default App;

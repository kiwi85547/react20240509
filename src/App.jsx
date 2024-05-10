import React from "react";
function MyComp({headColor,bodyColor}){
    return(
        <div>
            <h1 style={{color:headColor}}>lorem</h1>
            <p style={{color:bodyColor}}>Lorem ipsum dolor.</p>
    </div>)
}

function App(props) {
  return (
    <div>
        <MyComp headColor={"skyblue"} bodyColor={"gold"}/>
        <MyComp headColor={"#ccc"}/>
        <MyComp headColor={"aqua"} bodyColor={"red"}/>
    </div>
  );
}

export default App;

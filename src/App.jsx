import React from "react";
function MyComp({color}){
    return(
        <div style={{color:color}}>
            <h1>lorem</h1>
            <p>Lorem ipsum dolor.</p>
    </div>)
}

function App(props) {
  return (
    <div>
        <MyComp color={"green"}/>
        <MyComp color={"aqua"}/>
    </div>
  );
}

export default App;

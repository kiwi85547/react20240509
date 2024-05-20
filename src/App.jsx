import React from 'react';
import {Box, Button, ChakraProvider} from "@chakra-ui/react";

function App(props) {
    function handleBoxClick() {
        console.log("박스 클릭됨")
    }

    function handleButtonClick(e) {
        // event bubbling 멈추기
        e.stopPropagation();
        console.log("버튼 클릭됨")
    }

    return (
        <ChakraProvider>
            <Box onClick={handleBoxClick} bgColor={"orange"} w={"100px"} h={"100px"}>
                <Button onClick={handleButtonClick}>버튼</Button></Box>
        </ChakraProvider>
    );
}

export default App;
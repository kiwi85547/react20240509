import React from 'react';
import {Box, ChakraProvider} from "@chakra-ui/react";

function App(props) {
    return (
        <ChakraProvider>
            <div style={{backgroundColor: "greenyellow", width: "500px"}}>w=500px</div>
            <div style={{backgroundColor: "yellowgreen", width: "100%"}}>w=100%</div>
            // 반응형 디자인. 너비가 500px이 넘어가면 blue, 안넘어가면 red
            <Box bg={{base: "red", md: "blue"}} w={{base: "100%", md: "500px"}}>Responsive Content</Box>
        </ChakraProvider>
    );
}

export default App;
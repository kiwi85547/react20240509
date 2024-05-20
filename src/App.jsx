import React from 'react';
import {Box, ChakraProvider} from "@chakra-ui/react";

function App(props) {
    return (
        <ChakraProvider>
            <Box bg={"greenyellow"} w={"500px"}>w=500px</Box>
            <br/>
            // 작은 화면 (기본 값): 너비가 100%로 설정되어 화면의 전체 너비를 차지
            // 중간 크기 이상의 화면 (md 이상): 너비가 500px로 고정됩니다.
            <Box bg={"yellowgreen"} w={{base: "100%", md: "500px"}}>w=base: "100%", md: "500px"</Box>
        </ChakraProvider>
    );
}

export default App;
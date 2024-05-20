import React from 'react';
import {Box, ChakraProvider} from "@chakra-ui/react";

function App(props) {
    return (
        <ChakraProvider>
            <Box m={1} bgColor={"orange.50"}>m=1</Box>
            <Box m={10} bgColor={"orange.100"}>m=10</Box>
            <Box m={20} bgColor={"orange.200"}>m=20</Box>
            <Box color={"orange.300"}>color orange.300</Box>
            <Box bgColor={"#f50"}>css 색상 값 사용</Box>
            <Box bg={"orange.900"}>Hello everyone</Box>
        </ChakraProvider>
    );
}

export default App;
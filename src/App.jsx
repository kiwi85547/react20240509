import React from 'react';
import {Box, ChakraProvider} from "@chakra-ui/react";

function App(props) {
    return (
        <ChakraProvider>
            <div style={{
                padding: "50px",
                margin: "10px",
                border: "10px solid black",
                background: "tomato"
            }}> Hello world
            </div>
            <Box p={"20px"} m={"30px"} border={"5px dashed black"} bgColor={"greenyellow"}>Box</Box>
            <Box bgColor={"orange.50"}>Hello everyone</Box>
            <Box bgColor={"orange.100"}>Hello everyone</Box>
            <Box bgColor={"orange.200"}>Hello everyone</Box>
            <Box bgColor={"orange.300"}>Hello everyone</Box>
            <Box bgColor={"orange.500"}>Hello everyone</Box>
            <Box bgColor={"orange.900"}>Hello everyone</Box>
            <Box m={"10px"} bgColor={"seagreen"}>margin </Box>
            <Box mt={"10px"} bgColor={"seagreen"}>margin top</Box>
            <Box mb={"10px"} bgColor={"seagreen"}>margin bottom</Box>
            <Box ml={"100px"} bgColor={"seagreen"}>margin left</Box>
            <Box mr={"100px"} bgColor={"seagreen"}>margin right</Box>
            <Box mx={"100px"} bgColor={"seagreen"}>margin x</Box>
            <Box my={"20px"} bgColor={"seagreen"}>margin y</Box>
            <Box p={"20px"} bgColor={"blue.100"}>padding</Box>
            <Box pt={"20px"} bgColor={"blue.200"}>padding top</Box>
            <Box pb={"20px"} bgColor={"blue.300"}>padding bottom</Box>
            <Box pl={"20px"} bgColor={"blue.400"}>padding left</Box>
            <Box pr={"100px"} bgColor={"blue.500"}>padding right. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ab accusantium alias aspernatur culpa expedita nisi nostrum ? 가나다라마바사아자차</Box>
            <Box px={"100px"} bgColor={"blue.600"}>padding x</Box>
            <Box py={"100px"} bgColor={"blue.700"}>padding y</Box>
            <Box w={"500px"} bgColor={"yellow.200"}>width 500px</Box>
            <Box h={"500px"} bgColor={"yellow.700"}>height 500px</Box>
        </ChakraProvider>
    );
}

export default App;
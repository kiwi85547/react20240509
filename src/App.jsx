import React from 'react';
import {Box, Center, ChakraProvider, Flex, Spacer} from "@chakra-ui/react";

function App(props) {
    return (
        <ChakraProvider>
            <Flex justify={"center"}>
                <Box bgColor={"coral"} w="100px">1</Box>
                <Box bg={"red"} w="100px">1</Box>
                <Spacer/>
                <Box bg={"blue"} w="100px">1</Box>
            </Flex>
            <hr/>
            <Flex justify={"space-evenly"}>
                <Box bg={"coral"} w="100px">2</Box>
                <Box bg={"red"} w="100px">2</Box>
                <Box bg={"blue"} w="100px">2</Box>
            </Flex>
            <hr/>
            <Center>
                <Box w={{base: "100%", md: "1000px"}} bg={"lemonchiffon"}>Box3</Box>
            </Center>
        </ChakraProvider>);
}

export default App;
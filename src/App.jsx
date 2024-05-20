import React from 'react';
import {Box, Button, ChakraProvider} from "@chakra-ui/react";

function App(props) {
    return (
        <ChakraProvider>
            <Box bg={"coral"} _hover={{bg: "yellow"}}>hover</Box>
            
            <Button
                colorScheme="teal"
                _hover={{
                    background: "white",
                    color: "teal.500",
                }}
            >
                Hover me
            </Button>

        </ChakraProvider>
    );
}

export default App;
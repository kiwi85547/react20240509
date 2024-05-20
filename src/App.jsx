import React from 'react';
import {Button, ChakraProvider, useToast} from "@chakra-ui/react";

function App(props) {
    const toast = useToast();
    return (
        <ChakraProvider>
            <Button onClick={() => toast({
                title: "토스트 제목",
                description: "We've created your account for you",
                //status: "info" 파란색 "success" 초록색
                status: "success",
                position: "bottom-left",
                isClosable: true,
                duration: 2000
            })}>계좌 생성
            </Button>
        </ChakraProvider>
    );
}

export default App;
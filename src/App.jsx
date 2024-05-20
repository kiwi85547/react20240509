import React from 'react';
import {Button, ChakraProvider, useToast} from "@chakra-ui/react";
import {AddIcon, ArrowForwardIcon, ArrowRightIcon, SearchIcon, SmallAddIcon} from "@chakra-ui/icons";

function App(props) {
    const toast = useToast();
    return (
        <ChakraProvider>
            <ArrowRightIcon/><br/>
            <SearchIcon boxSize={10}/><br/>
            <AddIcon w={8} h={18} color={"red"}/><br/>
            <Button ml={2} colorScheme={"teal"} rightIcon={<SmallAddIcon/>}
                    onClick={() => toast({
                        title: "토스트 제목",
                        description: "We've created your account for you",
                        //status: "info" 파란색 "success" 초록색
                        status: "success",
                        position: "bottom-left",
                        isClosable: true,
                        duration: 2000
                    })}>계좌 생성
            </Button>
            <Button rightIcon={<ArrowForwardIcon/>} variant={"outline"}
                    colorScheme={"teal"} ml={4}
                    onClick={() => toast({
                        description: "02-333-4444",
                        status: "info",
                        position: "top",
                        duration: 3000,
                        isClosable: true
                    })}
            >Call us</Button>
        </ChakraProvider>
    );
}

export default App;
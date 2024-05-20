import React, {useEffect, useState} from 'react';
import {ChakraProvider, useDisclosure, useToast} from "@chakra-ui/react";

function App(props) {
    // use... : Hook
    // if / for 내에서 사용하지 말 것

    const [count, setCount] = useState(0)
    useEffect(() => {
    }, []);
    const toast = useToast();
    const {isOpen, onClose, onOpen} = useDisclosure();
    const [message, setMessage] = useState("")

    return (
        <ChakraProvider>
            <div></div>
        </ChakraProvider>
    );
}

export default App;
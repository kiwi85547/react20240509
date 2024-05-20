import React from 'react';
import {
    Button,
    ChakraProvider,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";

function App(props) {
    const {isOpen, onClose, onOpen} = useDisclosure();
    return (
        <ChakraProvider>
            <Button onClick={onOpen}>Button</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        Modal 메세지
                    </ModalHeader>
                    <ModalBody>
                        Modal 이란 무엇일까요?
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>닫기</Button>
                        <Button colorScheme="blue">저장</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}

export default App;
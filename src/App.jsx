import React from 'react';
import {Button, ChakraProvider} from "@chakra-ui/react";

function App(props) {
    return (
        <ChakraProvider>
            {/*맞춤형으로 수정하고 싶으면 sx 쓰기. style props 사용하듯이 쓰면 됨*/}
            <Button sx={{color: "orange"}} colorScheme={"blue"}>sx(system style object):스타일 덮어쓰기</Button>
        </ChakraProvider>
    );
}

export default App;
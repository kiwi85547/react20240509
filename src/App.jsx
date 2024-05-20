import React, {useState} from 'react';
import {
    Box,
    Center,
    ChakraProvider,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Switch,
    Text,
    Textarea
} from "@chakra-ui/react";


function App(props) {
    const [resize, setResize] = useState('horizontal')
    const [value, setValue] = useState("");

    function handleInputChange(e) {
        setValue(e.target.value)
    }

    return (
        <ChakraProvider>
            <label htmlFor={"input1"}>이름</label>
            <input id={"input1"}/>
            <hr/>
            <Center>
                <Box w={{base: "100%", md: "50%"}}>
                    <FormControl>
                        <FormLabel>이름</FormLabel>
                        <Input/>
                    </FormControl>
                </Box>
            </Center>
            <hr/>
            <Checkbox>react</Checkbox>{"  "}
            <Checkbox>vue</Checkbox>
            <hr/>
            <RadioGroup>
                <Radio value="1">Chat GPT</Radio>
                <Radio value="2">Copilot</Radio>
                <Radio value="3">Gemini</Radio>
            </RadioGroup>
            <hr/>
            Switch<Switch/>
            <Textarea placeholer="입력하세요"></Textarea>


            <hr/>
            <RadioGroup defaultValue={resize} onChange={setResize} mt={2} mb={2}>
                <Stack direction='row' spacing={5}>
                    <Radio value='horizontal'>Horizontal</Radio>
                    <Radio value='vertical'>Vertical</Radio>
                    <Radio value='none'>None</Radio>
                </Stack>
            </RadioGroup>

            <Textarea
                placeholder='Here is a sample placeholder'
                size='sm'
                resize={resize}
            />


            <Text mb={"8px"}>Value:{value}</Text>
            <Textarea value={value} onChange={handleInputChange} placeholder={"Here is a placeholder"} size={"sm"}/>

        </ChakraProvider>
    );
}

export default App;
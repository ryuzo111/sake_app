//Library
import { Button, Text, Image, Center, Box, Input, Flex} from '@chakra-ui/react'
import { Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import axios from "axios"
import React, {useState, useEffect} from 'react'

//image
import logoImage from "../common/public/logo.png";
import loginBackground from "../common/public/loginBackground.png";

function Register() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const client =  axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const handleFormSubmit = () => {
        console.log(mail);
        console.log("テスト2");
        var params = new URLSearchParams();
        params.append('name', name);
        params.append('mail', mail);
        params.append('password', password);
        params.append('passwordConfirm', passwordConfirm);
        try { 
            client.post("/users/register", params)
            .then((res) => {console.log(res); })
            .catch(console.error);
        } catch (e) {
            console.log("エラーを吐いている");
            console.log(e);
        }
        }

    return (
    <Box w='100%' h='100vh' bgSize='cover' bgImage={loginBackground}>
        <Center>
            <Flex position='absolute' top='20%' flexDirection='column' alignItems='center' justifyContent='space-around'>
                <Image src={logoImage}
                    boxSize='150px'
                    position='relative'
                    top='40px'
                    zIndex='1'
                />
                <Box backdropFilter='blur(6px)' w={boxWidthSize} h={boxHeightSize} textAlign='center' >
                    <Box w={inputWidthSize} m='auto'>
                        <form 
                            onSubmit={handleFormSubmit}
                        >
                        <Text color="white" textAlign="left" py="2">Username(ニックネーム可)</Text>
                        <Input
                            placeholder="beerくん"
                            w={inputWidthSize}
                            bgColor="white"
                            onChange={(e) => setName(e.target.value)}
                        ></Input>
                        <Text color="white" textAlign="left" py="2">Email</Text>
                        <Input
                            type="email"
                            placeholder="test@test.com"
                            w={inputWidthSize}
                            bgColor="white"
                            onChange={(e) => setMail(e.target.value)}
                        ></Input>
                        <Text color="white" py="2" textAlign="left">Password</Text>
                        <Input
                            bgColor="white"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        ></Input>
                        <Text color="white" py="2" textAlign="left">Password (確認)</Text>
                        <Input 
                            bgColor="white" 
                            type="password"
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        ></Input>
                        <Button type="submit" colorScheme="purple" w={inputWidthSize} my="4" onClick={handleFormSubmit}>REGISTER</Button>
                        <ChakraLink as={RouterLink} to='/login' color="white" fontSize="sm">ログインはこちら</ChakraLink>

                        </form>
                    </Box>
                </Box>
            </Flex>
        </Center>
    </Box>
    );
}


//レスポンシブ対応 参考 https://zenn.dev/terrierscript/books/2021-05-chakra-ui/viewer/1-5-1-responsive
const inputWidthSize = { base: "20em", sm: "sm", md: "md", lg: "lg", xl: "xl"};
const boxWidthSize = { base: "22em", sm: "25em", md: "35em", lg: "40em", xl: "44em"};
const boxHeightSize = { base: "27em", sm: "27em", md: "27em", lg: "27em", xl: "27em"};

export default Register;
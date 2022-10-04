//Library
import { Button, Text, Image, Center, Box, Input, Flex} from '@chakra-ui/react'
import { Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import axios from "axios"
import React, {useState,  useCallback} from 'react'
import TextForm from "../components/form.jsx";

//image
import logoImage from "../common/public/logo.png";
import loginBackground from "../common/public/loginBackground.png";

function Register() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [nameError, setNameError] = useState("");
    const [mailError, setMailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");

    const client =  axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();

        var params = new URLSearchParams();
        params.append("name", name);
        params.append("mail", mail);
        params.append("password", password);
        params.append("passwordConfirm", passwordConfirm);

        try { 
            client.post("/users/register", params)
            .then((res) => {
                console.log("ここやでーーーーーkkj ");
                return ;
            })
            .catch((err) => {
                // エラーメッセージをクリア
                setNameError("");
                setMailError("");
                setPasswordError("");
                setPasswordConfirmError("");

                err.response.data.errors.forEach((data) => {
                    data.param == 'name' && setNameError(`Username: ${data.msg}`);
                    data.param == 'mail' && setMailError(`Email: ${data.msg}`);
                    data.param == 'password' && setPasswordError(`Password: ${data.msg}`);
                    data.param == 'passwordConfirm' && setPasswordConfirmError(`Password(確認):${data.msg}`);
                });
                return;
            });
        } catch (err) {
            console.log(err);
        }
    });

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
                <Box backdropFilter='blur(6px)' w={boxWidthSize} h='auto' textAlign='center' >
                    <Box w={inputWidthSize} m='auto'>
                        <form onSubmit={handleFormSubmit}>

                        <TextForm
                            placeholder="beerくん"
                            width={inputWidthSize}
                            bgColor="white"
                            label="Username(ニックネーム可)"
                            setValue={setName}
                            errorMessage={nameError}
                        />

                        <TextForm
                            placeholder="test@test.com"
                            width={inputWidthSize}
                            bgColor="white"
                            label="Email"
                            setValue={setMail}
                            errorMessage={mailError}
                            type="email"
                        />

                        <TextForm
                            width={inputWidthSize}
                            bgColor="white"
                            label="Password"
                            setValue={setPassword}
                            errorMessage={passwordError}
                            type="password"
                        />
                        
                        <TextForm
                            width={inputWidthSize}
                            bgColor="white"
                            label="Password (確認)"
                            setValue={setPasswordConfirm}
                            errorMessage={passwordConfirmError}
                            type="password"
                        />

                        <Button type="submit" colorScheme="purple" w={inputWidthSize} my="4" >REGISTER</Button>
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

export default Register;
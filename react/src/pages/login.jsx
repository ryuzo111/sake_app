//Library
import { Button, Text, Image, Center, Box, Input } from '@chakra-ui/react'

//image
import logoImage from "../common/public/logo.png";
import loginBackground from "../common/public/loginBackground.png";

function Login() {
    return (
    <Box w='100%' h='100vh' bgSize='cover' bgImage={loginBackground}>
        <Center>
            <Box backdropFilter='blur(6px)' w={inputSize} p="30px">
                <Image src={logoImage}
                    boxSize='100px'
                />
                <Box w={inputSize}>
                    <Text color="white">Username</Text>
                    <Input
                        type="email"
                        placeholder="test@test.com"
                        w={inputSize}
                        bgColor="white"
                    ></Input>
                    <Text color="white">Password</Text>
                    <Input bgColor="white" type="password"></Input>
                    <Button colorScheme="purple" w={inputSize}>LOGIN</Button>
                </Box>
            </Box>
        </Center>
    </Box>
    );
}

//レスポンシブ対応 参考 https://zenn.dev/terrierscript/books/2021-05-chakra-ui/viewer/1-5-1-responsive
const inputSize ={sm: "sm", md: "md", lg: "lg", xl: "xl"};

export default Login;
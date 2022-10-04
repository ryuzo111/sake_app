//Library
import { Button, Text, Image, Center, Box, Input, Flex} from '@chakra-ui/react'
import { Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"



//image
import logoImage from "../common/public/logo.png";
import loginBackground from "../common/public/loginBackground.png";

function Login() {
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
                        <Text color="white" textAlign="left" py="2">Username</Text>
                        <Input
                            type="email"
                            placeholder="test@test.com"
                            w={inputWidthSize}
                            bgColor="white"
                        ></Input>
                        <Text color="white" py="2" textAlign="left">Password</Text>
                        <Input bgColor="white" type="password"></Input>
                        <Button colorScheme="purple" w={inputWidthSize} my="4">LOGIN</Button>
                        <ChakraLink as={RouterLink} to='/register' color="white" fontSize="sm">新規会員登録はこちら</ChakraLink>
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
const boxHeightSize = { base: "17em", sm: "17em", md: "17em", lg: "17em", xl: "17em"};

export default Login;

// import {
//     List,
//     ListItem,
//     ListIcon,
//     Circle,
//     Box,
//     Image,
//     Badge,
//     Icon,
//     Container,
//     Center,
//   } from '@chakra-ui/react'
//   import { Link } from 'react-router-dom'
//   import logoImage from "../common/public/logo.png"
//   import loginBackground from "../common/public/loginBackground.png";;
//   function LiqueurList() {
//     const property = {
//       genre: 'お酒のジャンルですわ！',
//       flag: 'New',
//       title: 'お酒のタイトルが入りますわ！',
//       content: 'ここが本文になりますのよ！ここが本文になりますのよ！ここが本文になりますのよ！ここが本文になりますのよ！ここが本文になりますのよ！ここが本文になりますのよ！ここが本文になりますのよ！',
//       reviewCount: 34,
//       rating: 4,
//     }
//     return (
//       <Box w='100%' h='100vh' bgSize='cover' bgImage={loginBackground} >
//         <Box w='100%' h='100vh' bgSize='cover' backdropFilter={'auto'} backdropBlur={'base'} >
//           <Box maxW='sm' maxH={'sm'} borderWidth='1px' borderRadius='lg' overflow='hidden' justifyContent={'center'} alignItems='center' >
//             <Box fontWeight='semibold' noOfLines={1} color='white' fontSize={13} backgroundColor='red' >
//               {property.title}
//             </Box>
//             <Box backgroundColor={'blue'}>
//               <Badge borderRadius='full' px='2' colorScheme='teal'>
//                 {property.genre}
//               </Badge>
//             </Box>
//             <Box backgroundColor={'gray'} >
//               <Image src={logoImage} w={200} h={200} margin='auto' />
//             </Box>
//             <Box p='6'>
//               <Box display='flex' alignItems='baseline'>
//                 <Badge borderRadius='full' px='2' colorScheme='teal'>{property.flag}</Badge>
//               </Box>
//               <Container color={'white'} fontSize={12} noOfLines={2}>
//                 {property.content}
//               </Container>
//               <Container display='flex' mt='2' alignItems='center'>
//                 {Array(5)
//                   .fill('')
//                   .map((_, i) => (
//                     <Icon
//                       key={i}
//                       color={i < property.rating ? 'teal.500' : 'gray.300'}
//                     />
//                   ))}
//               </Container>
//             </Box>
//           </Box>
//         </Box>
//       </Box >
//     )
//   }
//   export default LiqueurList;
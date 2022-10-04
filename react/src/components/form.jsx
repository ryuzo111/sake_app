import { Button, Text, Image, Center, Box, Input, Flex} from '@chakra-ui/react'


const TextForm = (props) => {
    const width = props.width ?? { base: "22em", sm: "25em", md: "35em", lg: "40em", xl: "44em"};
    const placeholder = props.placeholder ?? "";
    const bgColor = props.bgColor ?? "white";
    const label = props.label;
    const errorMessage = props.errorMessage ?? "";
    const type = props.type ?? "text"
    const setValue = props.setValue;

    return (
        <Box>
            <Text color="white" textAlign="left" py="2">{label}</Text>
            <Input
                type={type}
                placeholder={placeholder}
                w={width}
                bgColor={bgColor}
                onChange={(e) => setValue(e.target.value)}
            ></Input>
            <Text color="red" textAlign="left" >{ errorMessage }</Text>
        </Box>
    );
}

export default TextForm;
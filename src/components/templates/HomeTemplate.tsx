import { Box, Flex, Image, Text } from "@chakra-ui/react";
import found from "../../assets/images/foundDev.png"
import Button from "../atoms/Button";
import React from "react";

const HomeTemplate: React.FC = () => {
    return (
        <Box 
            position="relative" 
            height="100vh"
            w='100%'
        > 
            <Image
                boxSize="100%"
                objectFit="cover"
                src={found}
                alt="Dan Abramov"
            />
            <Flex
                position="absolute"
                top="50%" 
                left="50%"
                transform="translate(-50%, -50%)"
                color="white" 
                borderRadius="md" 
                flexDirection='column'
                alignItems='center'
                textAlign='center'
                gap={4}
            >
                <Text fontWeight='bold' fontSize={20}>Bem vindo</Text>
                <Text fontSize={50} fontWeight='bold'>
                    Desenvolvedor web Front-end
                </Text>
                <Button text="Contate-me" br="30px" bg="#c508bb" />
            </Flex>
        </Box>
    );
};

export default HomeTemplate;

import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import found from "../../assets/images/foundDev.png"
import React from "react";

const HomeTemplate: React.FC = () => {
    return (
        <Box 
            id="inicio"
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
                <Text fontWeight='bold' fontSize={20}>Bem vindo(a)!</Text>
                <Text fontSize={{base: '2xl', md: '4xl', lg: '6xl'}} fontWeight='bold'>
                    Desenvolvedor web Front-end
                </Text>
                <Link 
                    cursor='pointer' 
                    textDecoration='none' // Remove a decoração padrão
                    onClick={() => window.open('https://wa.me/5521994707188', '_blank')}
                    borderRadius="30px" 
                    p="8px 18px" 
                    bg="#c508bb"
                    w='200px' 
                    h='40px' 
                    mx='auto'
                    _hover={{ textDecoration: 'none' }}
                >
                    WhatsApp
                </Link>

            </Flex>
        </Box>
    );
};

export default HomeTemplate;

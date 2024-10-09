import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Button from "../atoms/Button";
import perfil from "../../assets/images/perfil.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [valueMenu, setValueMenu] = useState<boolean>(false);

    const handleMenu = () => {
        setValueMenu(prev => !prev); // Inverte o estado do menu
    };

    return (
        <Flex
            w={{ base: '100%', md: '100%', lg: '20%' }}  
            h={{ base: '80px', md: '', lg: '100vh' }}
            align="center" 
            flexDirection={{ base: 'row', md: 'row', lg: 'column' }}
            justifyContent='space-between'
            bg='#111'
            color='#fff'
            position='relative'
        >
            <Box 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                flexDirection='column'
                h={200}
            >
                <Image
                    boxSize='100px'
                    objectFit='cover'
                    src={perfil} 
                    borderRadius={50}
                    alt='Dan Abramov'
                    display={{ base: 'none', md: 'none', lg: 'flex' }}
                />
                <Text fontWeight='bold' pl={{ base: '10px', md: '10px', lg: '0' }}>Antonio Jânderson</Text>
            </Box>
            
            <UnorderedList 
                m={0} 
                textAlign='center' 
                p={0}
                position={{ base: 'absolute', md: 'absolute', lg: 'static' }} 
                bottom={{ base: valueMenu ? '-296px' : '0' }} 
                zIndex={2} 
                bg='#111' 
                w={{ base: '100%' }} 
                py={{ base: '20px' }}
                display={{ base: valueMenu ? 'block' : 'none', lg: 'block' }} 
            >
                <ListItem listStyleType='none'>Início</ListItem>
                <ListItem listStyleType='none' my={30}>Sobre mim</ListItem>
                <ListItem listStyleType='none' my={30}>O que eu faço</ListItem>
                <ListItem listStyleType='none' my={30}>Portfólio</ListItem>
                <Button text="Whatsapp" br="30px" bg="#c508bb"/>
            </UnorderedList>

            <UnorderedList m={0} display='flex' p={0} alignItems='center' justifyContent='space-evenly' w='50%' py={6}>
                <ListItem listStyleType='none'><BsLinkedin size={20} /></ListItem>
                <ListItem listStyleType='none'><BsGithub size={20} /></ListItem>
                <ListItem listStyleType='none'><BsWhatsapp size={20} /></ListItem>
            </UnorderedList>
            
            <Box display={{ base: 'flex', md: 'flex', lg: 'none' }} pr={4}>
                <RxHamburgerMenu size={30} onClick={handleMenu} />
            </Box>
        </Flex>
    );
};

export default Navbar;

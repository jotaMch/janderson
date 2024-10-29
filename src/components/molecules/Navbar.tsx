import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import perfil from "../../assets/images/perfil.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [valueMenu, setValueMenu] = useState<boolean>(false);

    const handleMenu = () => {
        setValueMenu(prev => !prev);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
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
                <ListItem cursor='pointer' listStyleType='none' onClick={() => scrollToSection('inicio')}>Início</ListItem>
                <ListItem cursor='pointer' listStyleType='none' my={30} onClick={() => scrollToSection('sobre')}>Sobre mim</ListItem>
                <ListItem cursor='pointer' listStyleType='none' my={30} onClick={() => scrollToSection('o-que-eu-faco')}>O que eu faço</ListItem>
                <ListItem cursor='pointer' listStyleType='none' my={30} onClick={() => scrollToSection('portfolio')}>Portfólio</ListItem>
                <ListItem cursor='pointer' listStyleType='none' my={30} onClick={() => scrollToSection('contato')}>Contato</ListItem>
                <ListItem  
                listStyleType='none' cursor='pointer'
                onClick={() => window.open('https://wa.me/5521994707188', '_blank')}
                borderRadius="30px" p="8px 18px" bg="#c508bb"
                w='200px' h='40px' mx='auto'
                >
                    Whatsapp
                </ListItem>
            </UnorderedList>

            <UnorderedList m={0} display='flex' p={0} alignItems='center' justifyContent='space-evenly' w='50%' py={6}>
                <ListItem cursor='pointer' listStyleType='none' onClick={() => window.open('https://www.linkedin.com/in/antonio-j%C3%A2nderson-082b54259/', '_blank')}><BsLinkedin size={20} /></ListItem>
                <ListItem cursor='pointer' listStyleType='none' onClick={() => window.open('https://github.com/jotaMch/', '_blank')}><BsGithub size={20} /></ListItem>
                <ListItem cursor='pointer' listStyleType='none' onClick={() => window.open('https://wa.me/5521994707188', '_blank')}><BsWhatsapp size={20} /></ListItem>
            </UnorderedList>
            
            <Box display={{ base: 'flex', md: 'flex', lg: 'none' }} pr={4} cursor='pointer' zIndex={2}>
                <RxHamburgerMenu size={30} onClick={handleMenu} />
            </Box>
        </Flex>
    );
};

export default Navbar;

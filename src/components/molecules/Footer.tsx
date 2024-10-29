import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { RiSmartphoneFill } from "react-icons/ri";
import { HighlightColor } from "../../assets/style/global";
import { FaMapMarkerAlt } from "react-icons/fa";

interface ValuesFooter {
}

const Footer: React.FC<ValuesFooter> = () => {
    return (
        <Box bg='#111' height='350px' id="contato">
            <Flex w={{ base: '90%', md: '80%', lg: '800px' }} h='300px' mx='auto' flexDirection='column' >
                <UnorderedList 
                    my='10px' mx={0} h='100%' justifyContent='center'
                    listStyleType='none' display='flex' flexDirection='column' gap='20px'>
                    <ListItem 
                        display='flex' justifyContent='flex-start' alignItems='start' w='100%'
                    >
                        <Flex w='40px' display='flex' justifyContent='center' alignItems='center'>
                            <HighlightColor>
                                <MdEmail size='24px' />
                            </HighlightColor>
                        </Flex>
                        <Text ml={2} color='#fff'>
                            <a href="mailto:jandersonmachado090@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
                                jandersonmachado090@gmail.com
                            </a>
                        </Text>  
                    </ListItem>
                    <ListItem 
                        display='flex' justifyContent='flex-start' alignItems='start' w='100%'
                    > 
                        <Flex transform='rotate(180deg)' w='40px' display='flex' justifyContent='center' alignItems='center'>
                            <HighlightColor>
                                <RiSmartphoneFill size='24px' />
                            </HighlightColor>
                        </Flex>
                        <Text ml={2} color='#fff'>(21) 99470 - 7188</Text>
                    </ListItem>
                    <ListItem 
                        display='flex' justifyContent='flex-start' alignItems='start' w='100%' 
                    >
                        <Flex w='40px' display='flex' justifyContent='center' alignItems='center'>
                            <HighlightColor>
                                <FaMapMarkerAlt size='24px' />
                            </HighlightColor>
                        </Flex>
                        <Text ml={2} color='#fff'>Zona Oeste - Rio de Janeiro, RJ</Text> 
                    </ListItem>
                </UnorderedList>
                <Text pl='14px' fontSize='sm' color='#c508bb'>&copy; Desenvolvido por Antonio Jânderson</Text>
            </Flex>
        </Box>
    );
}

export default Footer;

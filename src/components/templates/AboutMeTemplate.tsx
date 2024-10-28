import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { HighlightColor } from "../../assets/style/global";
import Button from "../atoms/Button";
import TitleComponent from "../atoms/Title";

const AboutMeTemplate: React.FC = () => {
    return (
        <Box textAlign='center' position='relative' bg="#262626" color='#FFF' fontSize={16}> 
            <TitleComponent title="Sobre mim" subTitle="Um pouco sobre mim" />
            <Flex flexDirection='column' alignItems='center' gap={16} pb={10}
            w={{ base: '90%', md: '80%', lg: '800px'}} mx='auto' fontSize={16}
            >
                <Text fontSize={17} fontWeight='bold'>
                    Eu sou <HighlightColor>Antonio Jânderson</HighlightColor>, um desenvolvedor web Front-end
                </Text>
                <Text>
                    Comecei meus estudos há quase 2 anos. Desenvolvi projetos para fins pessoais e
                    acadêmicos na EBAC, onde aprendi desde o básico em HTML, CSS, JavaScript 
                    até frameworks e ferramentas como React, Typescript e ...??
                    Atualmente estou cursando Análise e Desenvolvimento de Sistemas na 
                    Universidade Estácio de Sá onde tenho obtido um aprendizado amplo e focado 
                    em Python e Django.
                </Text>            
                <UnorderedList p={0} m={0}
                h={40} display='flex' flexDirection='column'
                justifyContent='space-between'w="100%"
                >
                    <ListItem listStyleType='none' borderBottom='1px solid #999'
                    w='100%' textAlign='start' paddingBottom={2}>
                        Nome: Antonio Jânderson
                    </ListItem>
                    <ListItem listStyleType='none' borderBottom='1px solid #999'
                    w='100%' textAlign='start' paddingBottom={2}>
                        Email: <HighlightColor>jandersonmachado090@gmail.com</HighlightColor>
                    </ListItem>
                    <ListItem listStyleType='none' borderBottom='1px solid #999'
                    w='100%' textAlign='start' paddingBottom={2}>
                        De: Ararendá-CE
                    </ListItem>
                    <ListItem listStyleType='none' borderBottom='1px solid #999'
                    w='100%' textAlign='start' paddingBottom={2}>
                        Moro em: Rio de Janeiro
                    </ListItem>
                </UnorderedList>
                <Button text="Enviar via WhatsApp" bg="#c508bb" br="30px" h="50px"/>
            </Flex>
        </Box>
    );
}

export default AboutMeTemplate;

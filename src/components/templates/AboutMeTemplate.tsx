import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { HighlightColor } from "../../assets/style/global";
import Button from "../atoms/Button";
import TitleComponent from "../atoms/Title";
import { FaBootstrap, FaCss3Alt, FaGitSquare, FaHtml5, FaNode, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { SiChakraui, SiStyledcomponents } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

const AboutMeTemplate: React.FC = () => {
    return (
        <Box textAlign='center' position='relative' bg="#050706" color='#FFF' fontSize={16} id="sobre">
            <TitleComponent title="Sobre mim" subTitle="Um pouco sobre mim" />
            <Flex flexDirection='column' alignItems='center' gap={16} pb={10}
                w={{ base: '90%', md: '80%', lg: '800px' }} mx='auto' fontSize={16}
            >
                <Text fontSize={17} fontWeight='bold'>
                    Eu sou <HighlightColor>Antonio Jânderson</HighlightColor>, um desenvolvedor FullStack
                </Text>
                <Text>
                Sou desenvolvedor full-stack, com experiência em React, TypeScript, Node.js e Express, construindo interfaces modernas, componentes reutilizáveis e APIs escaláveis.
                Tenho experiência sólida com MongoDB, MySQL, JWT, testes com Jest e Testing Library, aplicando boas práticas, padrão MVC e metodologias ágeis para manter qualidade, segurança e escalabilidade do código. Também utilizo Figma para design e prototipagem de interfaces.
                Atualmente, venho aprimorando meus conhecimentos em Go (Golang), explorando sua aplicação em back-end robusto e sistemas de notificações em tempo real.
                Participei de projetos que exigem organização, eficiência e resultados concretos, contribuindo com documentação técnica e colaboração em equipe, sempre pronto para entregar soluções de impacto e agregar valor ao produto e ao time.
                </Text>

                <UnorderedList
                    p={0}
                    m={0}
                    color="#c508bb"
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    w="100%"
                    gap={4}
                    sx={{
                        '@media (min-width: 1024px)': {
                            flexDirection: 'row',
                            justifyContent: 'center',
                            '& > *': {
                                width: '12%',
                            },
                        },
                        '@media (min-width: 767px) and (max-width: 1024px)': {
                            flexDirection: 'row',
                            justifyContent: 'center',
                            '& > *': {
                                width: '15%',
                            },
                        },
                        '@media (max-width: 767px)': {
                            flexDirection: 'row',
                            justifyContent: 'center',
                            '& > *': {
                                width: '16%',
                            },
                        },
                    }}
                >
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <FaHtml5 size='40px' />
                        <Text fontSize='10px' color='#fff'>HTML5</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <FaCss3Alt size='40px' />
                        <Text fontSize='10px' color='#fff'>CSS3</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <RiJavascriptFill size='40px' />
                        <Text fontSize='10px' color='#fff'>JavaScript</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <BiLogoSass size='40px' />
                        <Text fontSize='10px' color='#fff'>Sass</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <FaBootstrap size='40px' />
                        <Text fontSize='10px' color='#fff'>Bootstrap</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <BiLogoTypescript size='40px' />
                        <Text fontSize='10px' color='#fff'>TypeScript</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <FaReact size='40px' />
                        <Text fontSize='10px' color='#fff'>React</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <RiTailwindCssFill size='40px' />
                        <Text fontSize='10px' color='#fff'>Tailwind CSS</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <SiStyledcomponents size='40px' />
                        <Text fontSize='10px' color='#fff'>Styled Components</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <SiChakraui size='40px' />
                        <Text fontSize='10px' color='#fff'>Chakra UI</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <FaNode size='40px' />
                        <Text fontSize='10px' color='#fff'>Node.js</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <FaPython size='40px' />
                        <Text fontSize='10px' color='#fff'>Python</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <FiFigma size='40px' />
                        <Text fontSize='10px' color='#fff'>Figma</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <DiMongodb size='40px' />
                        <Text fontSize='10px' color='#fff'>MongoDB Atlas</Text>
                    </ListItem>
                    <ListItem listStyleType="none" display='flex' flexDirection='column' alignItems='center'>
                        <FaGitSquare size='40px' />
                        <Text fontSize='10px' color='#fff'>Git</Text>
                    </ListItem>
                </UnorderedList>

                <UnorderedList p={0} m={0}
                    h={40} display='flex' flexDirection='column'
                    justifyContent='space-between' w="74%"
                >
                    <ListItem listStyleType='none' borderBottom='1px solid #999'
                        w='100%' textAlign='start' paddingBottom={2}>
                        Nome: Antonio Jânderson
                    </ListItem>
                    <ListItem listStyleType='none' borderBottom='1px solid #999'
                        w='100%' textAlign='start' paddingBottom={2}> 
                        Email: <a href="mailto:jandersonmachado090@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
                                    <HighlightColor>jandersonmachado090@gmail.com</HighlightColor>
                                </a>
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
                <Button text="Enviar via WhatsApp" bg="#c508bb" br="30px" h="50px" />
            </Flex>
        </Box>
    );
}

export default AboutMeTemplate;

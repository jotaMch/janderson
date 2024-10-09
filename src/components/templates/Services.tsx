import { Box, Card, CardBody, Flex, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import TitleComponent from "../atoms/Title"
import { MdOutlineLibraryBooks, MdOutlineWeb } from "react-icons/md"
import { FaCubes, FaLaptopCode } from "react-icons/fa"


const Services: React.FC = () => {
    return(
        <Box h='' bg='#111' >
            <TitleComponent  title="Serviços" subTitle="O que eu faço?"/>
            <UnorderedList textAlign='center' w={{ base: '90%', md: '80%', lg: '800px'}}
                display='flex' flexDirection='column' m='0 auto' p='20px 0 30px' gap={4}
                justifyContent='space-between'
                >
                    <ListItem listStyleType='none'
                    w='100%' textAlign='start' paddingBottom={2}>
                        <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        bg='#020202' borderRadius='8px' color='#999' 
                        border='2px solid #111' boxShadow='0 0 60px -50px #c508bb'
                        >
                            <Flex justifyContent='center' alignItems='center' 
                            p={2} maxW={{base: '100%', md: '30%', lg: '200px' }} w='100%' bg='#111' >
                                <FaLaptopCode size={100}  color='#c508bb'/>
                            </Flex>
                            <Stack w={{md: '70%'}}>
                                <CardBody>
                                    <Heading size='md' color='#c508bb'>Desenvolvimento Web Front-End</Heading>
                                    <Text py='2'>                     
                                        Criação de interfaces web modernas e responsivas utilizando tecnologias como HTML, CSS, JavaScript, React e TypeScript. Com foco em entregar soluções visuais atrativas e funcionais, desenvolvo projetos com boas práticas e atenção aos detalhes.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </ListItem>
                    <ListItem listStyleType='none'
                    w='100%' textAlign='start' paddingBottom={2}>
                        <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        bg='#020202' borderRadius='8px' color='#999' 
                        border='2px solid #111' boxShadow='0 0 60px -50px #c508bb'
                        >
                            <Flex justifyContent='center' alignItems='center' 
                            p={2} maxW={{base: '100%', md: '30%', lg: '200px' }} w='100%' bg='#111' >
                                <MdOutlineWeb size={100}  color='#c508bb'/>
                            </Flex>
                            <Stack w={{md: '70%'}}>
                                <CardBody>
                                    <Heading size='md' color='#c508bb'>UI/UX Design</Heading>
                                    <Text py='2'>                   
                                        Desenvolvimento de interfaces otimizadas para o usuário, utilizando ferramentas como Figma, Chakra UI e Styled-components. Foco na criação de experiências intuitivas e responsivas, garantindo que os usuários naveguem com facilidade e eficiência.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </ListItem>
                    <ListItem listStyleType='none'
                    w='100%' textAlign='start' paddingBottom={2}>
                        <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        bg='#020202' borderRadius='8px' color='#999' 
                        border='2px solid #111' boxShadow='0 0 60px -50px #c508bb'
                        >
                            <Flex justifyContent='center' alignItems='center' 
                            p={2} maxW={{base: '100%', md: '30%', lg: '200px' }} w='100%' bg='#111' >
                                <FaCubes size={100}  color='#c508bb'/>
                            </Flex>
                            <Stack w={{md: '70%'}}>
                                <CardBody>
                                    <Heading size='md' color='#c508bb'>Gerenciamento de Estados e Componentes Dinâmicos</Heading>
                                    <Text py='2'>
                                        Habilidade em gerenciar estados complexos e criar componentes dinâmicos utilizando Redux e outras ferramentas de gerenciamento de estado. Entrego interfaces rápidas e interativas, otimizadas para diferentes dispositivos e tamanhos de tela.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </ListItem>
                    <ListItem listStyleType='none'
                    w='100%' textAlign='start' paddingBottom={2}>
                        <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        bg='#020202' borderRadius='8px' color='#999' 
                        border='2px solid #111' boxShadow='0 0 60px -50px #c508bb'
                        >
                            <Flex justifyContent='center' alignItems='center' 
                            p={2} maxW={{base: '100%', md: '30%', lg: '200px' }} w='100%' bg='#111' >
                                <MdOutlineLibraryBooks size={100}  color='#c508bb'/>
                            </Flex>
                            <Stack w={{md: '70%'}}>
                                <CardBody>
                                    <Heading size='md' color='#c508bb'>Estudo de Backend com Python</Heading>
                                    <Text py='2'>                     
                                    Atualmente em fase de estudo do desenvolvimento backend com Python, com foco em construir soluções escaláveis e seguras no futuro. O objetivo é complementar minhas habilidades front-end e expandir minha atuação para o desenvolvimento completo de aplicações.
                                    </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </ListItem>
            </UnorderedList>
        </Box>
    )
}

export default Services
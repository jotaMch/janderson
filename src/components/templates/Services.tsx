import { Box, Card, CardBody, Flex, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import TitleComponent from "../atoms/Title"
import { MdOutlineLibraryBooks, MdOutlineWeb } from "react-icons/md"
import { FaCubes, FaLaptopCode } from "react-icons/fa"


const Services: React.FC = () => {
    return(
        <Box h='' bg='#080308' id="o-que-eu-faco">
            <TitleComponent  title="Serviços" subTitle="O que eu faço?"/>
            <UnorderedList textAlign='center' w={{ base: '90%', md: '80%', lg: '800px'}}
                display='flex' flexDirection='column' m='0 auto' p='20px 0 30px' gap={4}
                justifyContent='space-between' fontSize={16}
                >
                    <ListItem listStyleType='none'
                    w='100%' textAlign='start' paddingBottom={2}>
                        <Card
                        direction={{ base: 'column', md: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        maxW='800px'
                        w='100%'
                        bg='#020202' borderRadius='8px' color='#999' 
                        border='1px solid #020202' 
                        >
                            <Flex justifyContent='center' alignItems='center' 
                            p={2} maxW={{base: '100%', md: '30%', lg: '200px' }} w='100%' bg='#080308' >
                                <FaLaptopCode size={100}  color='#c508bb'/>
                            </Flex>
                            <Stack w={{base: '100%', md: '70%', lg: '600px'}}>
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
                        direction={{ base: 'column', md: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        maxW='800px'
                        w='100%'
                        bg='#020202' borderRadius='8px' color='#999'  
                        border='1px solid #020202' 
                        >
                            <Flex justifyContent='center' alignItems='center' 
                            p={2} maxW={{base: '100%', md: '30%', lg: '200px' }} w='100%' bg='#080308' >
                                <MdOutlineWeb size={100}  color='#c508bb'/>
                            </Flex>
                            <Stack w={{base: '100%', md: '70%', lg: '600px'}}>
                                <CardBody>
                                    <Heading size='md' color='#c508bb'>UI Design</Heading>
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
                        direction={{ base: 'column', md: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        maxW='800px'
                        w='100%'
                        bg='#020202' borderRadius='8px' color='#999'  
                        border='1px solid #020202' 
                        >
                            <Flex justifyContent='center' alignItems='center' 
                            p={2} maxW={{base: '100%', md: '30%', lg: '200px' }} w='100%' bg='#080308' >
                                <FaCubes size={100}  color='#c508bb'/>
                            </Flex>
                            <Stack w={{base: '100%', md: '70%', lg: '600px'}}>
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
                        direction={{ base: 'column', md: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        maxW='800px'
                        w='100%'
                        bg='#020202' borderRadius='8px' color='#999'                         
                        border='1px solid #020202' 
                        >
                            <Flex justifyContent='center' alignItems='center' 
                            p={2} maxW={{base: '100%', md: '30%', lg: '200px' }} w='100%' bg='#080308' >
                                <MdOutlineLibraryBooks size={100}  color='#c508bb'/>
                            </Flex>
                            <Stack w={{base: '100%', md: '70%', lg: '600px'}}>
                            <CardBody>
                                <Heading size='md' color='#c508bb'>Desenvolvimento Backend com Node.js</Heading>
                                <Text py='2'>                     
                                Atuo no desenvolvimento backend com Node.js, construindo soluções escaláveis e seguras. Essa habilidade complementa minha experiência com front-end, permitindo que eu desenvolva aplicações completas utilizando JavaScript e TypeScript em toda a stack.
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
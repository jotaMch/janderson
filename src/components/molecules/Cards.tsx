import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Link,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { HighlightColor } from "../../assets/style/global";

interface ValueSelect {
    value: string;
}

const MyCardProject: React.FC<ValueSelect> = ({ value }) => {
    const projects = [
        {
            type: "Front-end",
            title: "EletroHeadJM",
            subTitle: "Loja virtual fictícia de Headseats",
            description: "Loja especializada em headsets onde os usuários podem explorar produtos e visualizar detalhes.",
            tecnology: "React | Tailwind CSS | Vercel",
            buttonText: "Ver projeto",
            buttonTextCode: "Ver código",
            projectLink: "https://head-seat.vercel.app/",
            codeLink: "https://github.com/jotaMch/head_Seat",
        },
        {
            type: "Front-end",
            title: "Jota Motors",
            subTitle: "Venda de carros",
            description: "Projeto para venda de carros com cards interativos e formulário de contato com validação.",
            tecnology: "JQuery | HTML | SASS | Vercel",
            buttonText: "Ver projeto",
            buttonTextCode: "Ver código",
            projectLink: "https://loja-jm.vercel.app/",
            codeLink: "https://github.com/jotaMch/loja_de_carros",
        },
        {
            type: "Front-end",
            title: "FIPE API HTTP REST",
            subTitle: "Consulta de informações de veículos",
            description: "Formulário de consulta de veículos com opções de marca, modelo e ano usando a API FIPE.",
            tecnology: "React | CSS | Vercel",
            buttonText: "Ver projeto",
            buttonTextCode: "Ver código",
            projectLink: "https://api-fipe-project.vercel.app/",
            codeLink: "https://github.com/jotaMch/Api_fipe_project",
        },
        {
            type: "Front-end",
            title: "Gif Shop",
            subTitle: "Loja de roupas com carrossel e formulário",
            description: "Loja interativa de roupas com carrossel, menu e formulário com validações.",
            tecnology: "jQuery | Bootstrap | LESS | Grunt",
            buttonText: "Ver projeto",
            buttonTextCode: "Ver código",
            projectLink: "https://grif-shop-jm.vercel.app/",
            codeLink: "https://github.com/jotaMch/Grif-shop-jm",
        },
        {
            type: "Back-end",
            title: "Registro de Clientes",
            subTitle: "CRUD",
            description: "Aplicação desktop que permite cadastrar, consultar, atualizar e excluir dados dos clientes.",
            tecnology: "C# | Windows Forms | MySQL | .NET Framework",
            buttonTextCode: "Ver código",
            codeLink: "https://github.com/jotaMch/CSharp",
        },
        {
            type: "FullStack",
            title: "Em desenvolvimento",
            subTitle: "Projeto para restaurante fictício",
            description: "Site para venda de refeições, desenvolvido para aprendizado em desenvolvimento web.",
            tecnology: "Python | Django | SQLite | Bootstrap",
            buttonText: "<Backend/>",
            buttonTextCode: "<Frontend/>",
            codeFront: "https://github.com/jotaMch/backend-python-project",
            codeBack: "https://github.com/jotaMch/backend-python-project",
        },
        {
            type: "FullStack",
            title: "Controle de Estoque",
            subTitle: "Projeto com operações de CRUD",
            description: "Criação de interfaces, implementação de APIs e manipulação de dados.",
            tecnology: "React | Typescript | Node | Express | MongoDB",
            buttonText: "<Backend/>",
            buttonTextCode: "<Frontend/>",            
            codeFront: "https://github.com/jotaMch/frontend_controle_de_produtos",
            codeBack: "https://github.com/jotaMch/backend_controle_de_produtos",
        },
        {
            type: "Freelancer",
            title: "JMTATTOO",
            subTitle: "Freelancer",
            description: "Uma página simples com seções sobre o tatuador, serviços oferecidos, links para redes sociais e solicitação de orçamentos.",
            tecnology: "React | Typescript | Chakra UI | Git | Github",
            buttonTextCode: "Ver projeto", 
            codeFront: "https://jeff-tattoo.vercel.app/",        
        },
        {
            type: "Article",
            title: "Em desenvolvimento",
            subTitle: "Engenharia de Software",
            description: "Construindo meu primeiro artigo com o intuito de expandir meus conhecimentos em Engenharia de Software.",
            tecnology: "Figma",
            buttonText: "Leia mais",
            buttonTextCode: undefined,
        },
    ];

    const projectExists = projects.some(project => project.type === value);

    const filteredProjects = projects.filter(project => project.type === value);
    
    return (
        <SimpleGrid
            spacing={6}
            w={{ base: "90%", md: "80%", lg: "800px" }}
            mx="auto"
            py={20}
            display="flex"
            flexWrap="wrap"
            gap="2%"
            rowGap="14px"
        >
            {projectExists ? (
                filteredProjects.map((project, index) => (
                    <Card
                        key={index}
                        bg="#050706" boxShadow='0 0 10px -5px #ffffff8e'
                        h={{ base: "250px", md: "300px", lg: "320px" }}
                        w={{ base: "100%", md: "49%", lg: "32%" }}
                    >
                        <CardHeader>
                            {project.title === "Em desenvolvimento" ? (
                                <Heading size="md" color="#c5a908">{project.title}</Heading>
                            ) : <Heading size="md" color="gray.400">{project.title}</Heading>}
                            
                        </CardHeader>
                        <CardBody py={0}>
                            <Text color="gray.400" fontWeight="bold">
                                {project.subTitle}
                            </Text>
                            <Text color="gray.400">{project.description}</Text>
                            <Text fontSize="12px" mt="4px">
                                <HighlightColor color="gray.400">
                                    {project.tecnology}
                                </HighlightColor>
                            </Text>
                        </CardBody>
                        <CardFooter display="flex" justifyContent="center" alignItems="center" gap={4}>
                            {project.buttonText && (
                                <Link
                                    href={project.codeBack? project.codeBack : project.projectLink}
                                    isExternal
                                    w="48%"
                                    textAlign="center"
                                    py={2}
                                    borderRadius="30px"
                                    bg="#0f0f0f"
                                    color="gray.400"
                                    _hover={{ bg: "#333" }}
                                >
                                    {project.buttonText}
                                </Link>
                            )}
                            {project.buttonTextCode &&  (
                                <Link
                                    href={project.codeFront? project.codeFront : project.codeLink}
                                    isExternal
                                    w="48%"
                                    textAlign="center"
                                    py={2}
                                    borderRadius="30px"
                                    bg="#0f0f0f"
                                    color="gray.400"
                                    _hover={{ bg: "#333" }}
                                >
                                    {project.buttonTextCode}
                                </Link>
                            )}
                        </CardFooter>
                    </Card>
                ))
            ) : (
                <Text color="#ffff" textAlign="center">
                    Nenhum projeto encontrado do tipo "{value}".
                </Text>
            )}
        </SimpleGrid>
    );
};

export default MyCardProject;

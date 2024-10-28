import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";
import Button from "../atoms/Button";
import { HighlightColor } from "../../assets/style/global";

interface ValueSelect {
    value: string;
}

const MyCardProject: React.FC<ValueSelect> = ({ value }) => {
    const projects = [
        {
            type: "Front-end",
            title: "Front-end Customer Dashboard",
            subTitle: "Sub title",
            description: "View a summary of all your customers over the last month.",
            tecnology: "tecnology",
            buttonText: "Ver projeto",
            buttonTextCode: "Ver código",
        },
        {
            type: "FullStack",
            title: "Site Restaurante",
            subTitle: "Projeto para restaurante fictício",
            description: "Site para Restaurante 'nome', com foco em venda de pratos em destaque. Projeto desenvolvido para aprendizado.",
            tecnology: "Python | Django | SQLite | HTML | Bootstrap",
            buttonText: "Ver projeto",
            buttonTextCode: "Ver código",
        },
        {
            type: "FullStack",
            title: "Controle de Estoque",
            subTitle: "Projeto para controle de produtos, usando CRUD",
            description: ` Criação de interfaces responsivas, implementação de APIs, manipulação de banco de dados com Mongoose, comunicação entre front-end e back-end.`,
            tecnology: "React | Typescript | Node | Express | MongoDB",
            buttonText: "Ver projeto",
            buttonTextCode: "Ver código",
        },
        {
            type: "Article",
            title: "Engenharia de Software",
            subTitle: "Sub title",
            description: "Artigo criado com o intuito de expandir meu conhecimento em Engenharia de Software.",
            tecnology: "tecnology",
            buttonText: "Leia mais",
            buttonTextCode: undefined,
        },
    ];

    // Retorna true se existir
    const projectExists = projects.some(project => project.type === value);

    const filteredProjects = projects.filter(project => project.type === value);
    
    return (
        <SimpleGrid
            spacing={6}
            w={{ base: "90%", md: "80%", lg: "800px" }}
            mx="auto"
            py={20}
            display='flex' flexWrap='wrap' gap='2%' rowGap={{base: 2}}
        >
            {projectExists ? (
                filteredProjects.map((project, index) => (
                    <Card key={index} bg="#111" h={{base: '250px', md: '300px', lg: '320px'}}
                    w={{base: '100%', md: '49%', lg: '32%'}}>
                        <CardHeader>
                            <Heading size="md" color="gray.400">
                                {project.title}
                            </Heading>
                        </CardHeader>
                        <CardBody py={0}>
                            <Text color="gray.400" fontWeight='bold'>
                                {project.subTitle}
                            </Text>
                            <Text color="gray.400">{project.description}</Text>
                            <Text fontSize='12px' mt='4px'>
                                <HighlightColor color="gray.400">{project.tecnology}</HighlightColor>
                            </Text>
                        </CardBody>
                        <CardFooter display='flex' justifyContent='center' 
                        alignItems='center' gap={4}>
                            <Button
                                w="48%"
                                fw="lighter"
                                text={project.buttonText}
                                br="30px"
                                bg="#262626"
                                color="gray.400"
                            />
                            {/* Selecionar os cartões com botões para ver código */}
                            {project.buttonTextCode?
                            <Button
                                w="48%"
                                fw="lighter"
                                text={project.buttonTextCode}
                                br="30px"
                                bg="#262626"
                                color="#fff"
                            /> : '' }
                        </CardFooter>
                    </Card>
                ))
            ) : (
                <Text color="#fff" textAlign="center">Nenhum projeto encontrado do tipo "{value}".</Text>
            )}
        </SimpleGrid>
    );
};

export default MyCardProject;

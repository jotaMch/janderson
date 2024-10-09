import { Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../atoms/Button";


const MyCardProject: React.FC = () => {
    return(
        <SimpleGrid 
        spacing={6} 
        w={{ base: '90%', md: '740px' }} // Responsivo para mobile
        mx='auto' 
        py={20}
        templateColumns={{ base: '1fr', md: 'repeat(auto-fill, minmax(200px, 230px))' }} // 1 coluna no mobile
        >
            <Card   bgGradient="linear(-45deg, #c508bb, #111)" 
            boxShadow='0 0 30px -10px #c508bb'>
                <CardHeader>
                <Heading size='md' color='#fff'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text color='#fff'>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button text="Ver projeto" br="30px" bg="#111" color="#fff" />
                </CardFooter>
            </Card>
            <Card bg='#111'>
                <CardHeader>
                <Heading size='md' color='#fff'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text color='#fff'>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button text="Ver projeto" br="30px" bg="#262626" color="#fff" />
                </CardFooter>
            </Card>
            <Card bg='#111'>
                <CardHeader>
                <Heading size='md' color='#fff'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text color='#fff'>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button text="Ver projeto" br="30px" bg="#262626" color="#fff" />
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}

export default MyCardProject
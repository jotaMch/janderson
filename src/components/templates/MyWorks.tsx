import { Box, Button, Flex } from "@chakra-ui/react"
import TitleComponent from "../atoms/Title"
import MyCardProject from "../molecules/Cards"
import { useState } from "react"


const MyWorks = () => {
    const [select, setSelect] = useState<string>("Front-end")
    return(
        <Box bg="#050706" id="portfolio"
        minH='100vh' h=''>
            <TitleComponent title="Portfólio" subTitle="Meus trabalhos" />
            <Flex
            mx='auto' gap={2} 
            justifyContent='center' alignItems='center'
            w={{ base: '90%', md: '80%', lg: '800px'}}
            >
                <Button bg='transparent' _hover={{ bg: "transparent" }} rounded='none'
                borderBottom={select === 'Front-end'? '2px solid #c508bb': 'none'} 
                color={select === 'Front-end'? '#c508bb': '#fff'} 
                onClick={() => setSelect('Front-end')}>
                    Front-end
                </Button>
                <Button bg='transparent' _hover={{ bg: "transparent" }} rounded='none' 
                borderBottom={select === 'Back-end'? '2px solid #c508bb': 'none'} 
                color={select === 'Back-end'? '#c508bb': '#fff'} 
                onClick={() => setSelect('Back-end')}>
                    Backend
                </Button>
                <Button bg='transparent' _hover={{ bg: "transparent" }} rounded='none' 
                borderBottom={select === 'FullStack'? '2px solid #c508bb': 'none'} 
                color={select === 'FullStack'? '#c508bb': '#fff'} 
                onClick={() => setSelect('FullStack')}>
                    FullStack
                </Button>
                <Button bg='transparent' _hover={{ bg: "transparent" }} rounded='none' 
                borderBottom={select === 'Freelancer'? '2px solid #c508bb': 'none'} 
                color={select === 'Freelancer'? '#c508bb': '#fff'} 
                onClick={() => setSelect('Freelancer')}>
                    Freelancers
                </Button>
                <Button bg='transparent' _hover={{ bg: "transparent" }} rounded='none' 
                borderBottom={select === 'Article'? '2px solid #c508bb': 'none'} 
                color={select === 'Article'? '#c508bb': '#fff'} 
                onClick={() => setSelect('Article')}>
                    Artigos
                </Button>                
            </Flex>
            <MyCardProject value={select} />
        </Box>
    )
}

export default MyWorks
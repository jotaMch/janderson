import { Box, Flex } from "@chakra-ui/react"
import TitleComponent from "../atoms/Title"
import MyCardProject from "../molecules/Cards"
import { ButtonOption } from "../../assets/style/global"
import { useState } from "react"


const MyWorks = () => {
    const [select, setSelect] = useState<string>("Front-end")
    return(
        <Box bg="#262626" id="portfolio"
        minH='100vh' h=''>
            <TitleComponent title="Portfólio" subTitle="Meus trabalhos" />
            <Flex
            mx='auto' gap={4}
            justifyContent='center' alignItems='center'
            w={{ base: '90%', md: '80%', lg: '800px'}}
            >
                <ButtonOption onClick={() => setSelect('Front-end')}>Front-end</ButtonOption>
                <ButtonOption onClick={() => setSelect('FullStack')}>FullStack</ButtonOption>
                <ButtonOption onClick={() => setSelect('Article')}>Artigos</ButtonOption>                
            </Flex>
            <MyCardProject value={select} />
        </Box>
    )
}

export default MyWorks
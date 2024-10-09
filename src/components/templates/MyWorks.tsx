import { Box } from "@chakra-ui/react"
import TitleComponent from "../atoms/Title"
import MyCardProject from "../molecules/Cards"


const MyWorks = () => {
    return(
        <Box bg="#262626">
            <TitleComponent title="Portfólio" subTitle="Meus trabalhos" />
            <MyCardProject />
        </Box>
    )
}

export default MyWorks
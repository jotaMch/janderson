import { Box } from "@chakra-ui/react";
import HomeTemplate from "../templates/HomeTemplate";
import AboutMeTemplate from "../templates/AboutMeTemplate";
import Services from "../templates/Services";
import MyWorks from "../templates/MyWorks";

const ContainerPage: React.FC = () => {
    return (
        <Box 
            height="100vh" 
            overflow="auto" 
            maxWidth="100vw"
            w={{base: '100%', md: '100%', lg: '80%'}}>
            <HomeTemplate />
            <AboutMeTemplate />
            <Services />
            <MyWorks />
        </Box>
    );
}

export default ContainerPage;

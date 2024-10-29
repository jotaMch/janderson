import { Box } from "@chakra-ui/react";
import HomeTemplate from "../templates/HomeTemplate";
import AboutMeTemplate from "../templates/AboutMeTemplate";
import Services from "../templates/Services";
import MyWorks from "../templates/MyWorks";
import Footer from "../molecules/Footer";

const ContainerPage: React.FC = () => {
    return (
        <Box 
            height={{base: '100%', md: '100%',lg: '100vh'}} 
            overflow={{base: 'hidden', md: 'hidden', lg:'auto'}} 
            maxWidth="100vw"
            w={{base: '100%', md: '100%', lg: '80%'}}>
            {/* <HomeTemplate />
            <AboutMeTemplate />
            <Services /> */}
            <MyWorks />
            <Footer />
        </Box>
    );
}

export default ContainerPage;

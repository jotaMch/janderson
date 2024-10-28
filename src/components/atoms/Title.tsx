import { Box, Text } from "@chakra-ui/react";

interface TiTleComponentProps { 
    title: string; 
    subTitle: string 
}

const TitleComponent: React.FC<TiTleComponentProps> = ({ title, subTitle }) => {

    return (
        <Box position="relative" zIndex={1} m={0} display="flex" 
        alignItems="center" justifyContent="center" height="auto">
            <Text 
            fontSize={{ base: '60px', md: '100px', lg: '140px' }} 
            m={0} fontWeight="bold" color="#48474794" textAlign="center">
                {title.toUpperCase()}
            </Text>
            <Text fontWeight='bold'
            fontSize={{ base: '18px', md: '18px', lg: '20px' }} 
            position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" 
            color="#fff" zIndex={2} m="0">
                {subTitle}
            </Text>
        </Box>
    );
};

export default TitleComponent;

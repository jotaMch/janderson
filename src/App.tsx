import { Flex } from '@chakra-ui/react'
import React from 'react'
import ContainerPage from './components/pages/ContainerPage'
import Navbar from './components/molecules/Navbar'

const App: React.FC = () => {

  return (
    <Flex direction={{ base: 'column', md: 'column', lg: 'row'}}>
      <Navbar />
      <ContainerPage />
    </Flex>
  )
}

export default App

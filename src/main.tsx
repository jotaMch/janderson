import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme.tsx"
import { MainReset } from './assets/style/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <MainReset>
        <App />
      </MainReset>
    </ChakraProvider>
  </StrictMode>,
)

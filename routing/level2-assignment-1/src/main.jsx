import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { DataFetchProvider } from './context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataFetchProvider>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </DataFetchProvider>
  </StrictMode>,
)

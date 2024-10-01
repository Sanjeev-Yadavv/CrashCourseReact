import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.jsx'
import {Provider} from 'react-redux'
import {ChakraProvider} from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainComponent from './components/MainComponent'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainComponent />
  </StrictMode>,
)

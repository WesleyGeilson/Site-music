import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeBrowser from './Pages/.jsx' /* importe pasta de documento pai -> documento -> filho */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeBrowser />
  </StrictMode>,
)

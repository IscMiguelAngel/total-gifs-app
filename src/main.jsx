import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TotalGifsApp } from './TotalGifsApp'

import './css/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TotalGifsApp />
  </StrictMode>,
)

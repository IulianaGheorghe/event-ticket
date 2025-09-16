import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OrganizerLandingPage from './pages/OrganizerLandingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrganizerLandingPage />
  </StrictMode>,
)

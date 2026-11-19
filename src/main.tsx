import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DesignProviders } from '@/components/layout/design-providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesignProviders>
      <App />
    </DesignProviders>
  </StrictMode>,
)

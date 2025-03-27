import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Inicio from './sections/Inicio'

import './index.css'
import Layout from './components/Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Navbar />
      <Inicio />
    </Layout>

  </StrictMode>,
)

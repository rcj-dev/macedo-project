import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Inicio from './sections/Inicio'
import Layout from './components/Layout'
import Qualidade from './sections/Qualidade'
import Footer from './components/Footer'
import Contato from './sections/Contato'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Navbar />
      <Inicio />
      <Qualidade />
      <Contato />
      <Footer />
    </Layout>

  </StrictMode>,
)

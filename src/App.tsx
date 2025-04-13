import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/LandingPage/Home/Home'
import './App.css'
import Portfolio from './pages/Portfolio/Portfolio'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ProjectDetail from './pages/LandingPage/Projects/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
      
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/portfolio/:id" element={<Portfolio />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/LandingPage/Home/Home'
import './App.css'
import Portfolio from './pages/Portfolio/Portfolio'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Portfolio />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App

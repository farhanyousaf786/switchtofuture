import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FarhanProfile from './pages/profile/farhan/farhan'
import Home from './pages/home/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farhan" element={<FarhanProfile />} />
        <Route path="/profile/farhan" element={<FarhanProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

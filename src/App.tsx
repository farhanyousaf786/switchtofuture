import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/farhan/Profile'
import Home from './pages/home/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farhan" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

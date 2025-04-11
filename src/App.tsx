import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/LandingPage/Home/Home'
import './App.css'
import ProfilePage from './pages/profile/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farhan" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

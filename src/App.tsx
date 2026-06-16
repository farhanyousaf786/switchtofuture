import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/LandingPage/Home/Home'
import ProfilePage from './pages/profile/ProfilePage'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farhan" element={<ProfilePage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

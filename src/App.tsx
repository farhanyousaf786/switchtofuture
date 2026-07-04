import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/LandingPage/Home/Home'
import ProfilePage from './pages/profile/ProfilePage'
import { ProjectDetailPage } from './features/projects'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farhan" element={<ProfilePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ClustyLayout from './pages/clusty/ClustyLayout';
import ClustyHome from './pages/clusty/ClustyHome';
import ClustyPrivacy from './pages/clusty/ClustyPrivacy';
import ClustyTerms from './pages/clusty/ClustyTerms';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clusty" element={<ClustyLayout />}>
          <Route index element={<ClustyHome />} />
          <Route path="privacy-policy" element={<ClustyPrivacy />} />
          <Route path="terms-and-conditions" element={<ClustyTerms />} />
          <Route path="privacy" element={<Navigate to="/clusty/privacy-policy" replace />} />
          <Route path="terms" element={<Navigate to="/clusty/terms-and-conditions" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

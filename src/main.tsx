import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const saved = localStorage.getItem('theme');
document.documentElement.setAttribute(
  'data-theme',
  saved === 'light' || saved === 'dark' ? saved : 'dark',
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProfileProvider } from './context/ProfileContext';
import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/fontawesome/css/all.min.css';
import './styles/layout-fixes.css';
import './styles/theme-engineering.css';
import './styles/theme-profile-gradients.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </BrowserRouter>
  </StrictMode>,
);

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<AboutPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:slug" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

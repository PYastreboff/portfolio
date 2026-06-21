import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';

const sharedPages = [
  { index: true, element: <AboutPage /> },
  { path: 'experience', element: <ExperiencePage /> },
  { path: 'portfolio', element: <PortfolioPage /> },
  { path: 'portfolio/:slug', element: <ProjectPage /> },
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {sharedPages.map((route) => (
          <Route key={`sw-${route.path ?? 'index'}`} {...route} />
        ))}
        <Route path="eng">
          {sharedPages.map((route) => (
            <Route key={`eng-${route.path ?? 'index'}`} {...route} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';
import { useProfile } from '../context/ProfileContext';
import { useBackToTop } from '../hooks/useBackToTop';
import { useSunFollow } from '../hooks/useSunFollow';

export default function Layout() {
  const location = useLocation();
  const { profile, isActivePath } = useProfile();
  const isAbout = isActivePath('');
  const isExperience = isActivePath('experience');
  const isPortfolio = isActivePath('portfolio');
  const contentBoxClass = isPortfolio ? 'box-outer portfolio-box' : 'box-outer';

  useBackToTop();
  useSunFollow();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.className = isExperience ? 'bg-triangles' : '';
    document.documentElement.className = profile.themeClass;
    document.documentElement.classList.add(
      /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'touch'
        : 'no-touch',
    );

    return () => {
      document.body.className = '';
    };
  }, [isExperience, profile.themeClass]);

  return (
    <>
      {isAbout && <div className="sun2" />}
      <div className="sun" />
      <Nav variant="mobile" />
      <main className="main">
        <div className="container gutter-top gutter-bottom">
          <div className="row sticky-parent">
            <Sidebar />
            <div className="col-12 col-md-12 col-xl-9">
              <div className={contentBoxClass}>
                <Nav variant="desktop" />
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="back-to-top" />
    </>
  );
}

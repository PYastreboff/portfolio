import { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getProfileFromPath, getSwitchPath, profilePath } from '../config/profiles';
import * as softwareContent from '../data/content';
import { portfolioItems as softwarePortfolioItems } from '../data/portfolioItems';
import { projects as softwareProjects } from '../data/projects';
import * as engineeringContent from '../data/engineeringContent';
import { portfolioItems as engineeringPortfolioItems } from '../data/engineeringPortfolioItems';
import { projects as engineeringProjects } from '../data/engineeringProjects';

const ProfileContext = createContext(null);

const contentByProfile = {
  software: {
    ...softwareContent,
    portfolioItems: softwarePortfolioItems,
    projects: softwareProjects,
    portfolioFilters: [
      { id: '*', label: 'All' },
      { id: 'category-stack', label: 'Full-Stack' },
      { id: 'category-soft', label: 'Software Design' },
      { id: 'category-web', label: 'Web Design' },
      { id: 'category-graphics', label: 'Graphic Design' },
      { id: 'category-comm', label: 'Community' },
      { id: 'category-vol', label: 'Volunteering' },
    ],
  },
  engineering: {
    ...engineeringContent,
    portfolioItems: engineeringPortfolioItems,
    projects: engineeringProjects,
    portfolioFilters: [
      { id: '*', label: 'All' },
      { id: 'category-cad', label: 'CAD & Modelling' },
      { id: 'category-print', label: '3D Printing' },
      { id: 'category-proto', label: 'Prototyping' },
      { id: 'category-aero', label: 'Aerospace' },
    ],
  },
};

export function ProfileProvider({ children }) {
  const { pathname } = useLocation();

  const value = useMemo(() => {
    const profile = getProfileFromPath(pathname);
    const content = contentByProfile[profile.id];

    return {
      profile,
      content,
      switchTo: getSwitchPath(pathname, profile.id),
      pathTo(segment = '') {
        return profilePath(profile.basePath, segment);
      },
      isActivePath(segment = '') {
        const target = profilePath(profile.basePath, segment);
        if (segment === '') {
          return pathname === target;
        }
        return pathname === target || pathname.startsWith(`${target}/`);
      },
    };
  }, [pathname]);

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }
  return context;
}

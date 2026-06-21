export const profiles = {
  software: {
    id: 'software',
    basePath: '',
    role: 'Software Engineer',
    themeClass: 'theme-software',
    switchLabel: 'Engineering Portfolio',
  },
  engineering: {
    id: 'engineering',
    basePath: '/eng',
    role: 'Aerospace Engineer',
    themeClass: 'theme-engineering',
    switchLabel: 'Software Portfolio',
  },
};

export function getProfileFromPath(pathname) {
  if (pathname === '/eng' || pathname.startsWith('/eng/')) {
    return profiles.engineering;
  }
  return profiles.software;
}

export function getProfileSegment(pathname, basePath) {
  if (!basePath) {
    return pathname === '/' ? '' : pathname.replace(/^\//, '');
  }
  if (pathname === basePath) return '';
  const prefix = `${basePath}/`;
  if (pathname.startsWith(prefix)) {
    return pathname.slice(prefix.length);
  }
  return '';
}

export function getSwitchPath(pathname, profileId) {
  const current = profiles[profileId];
  const other = profileId === 'software' ? profiles.engineering : profiles.software;
  const segment = getProfileSegment(pathname, current.basePath);
  const switchSegment = segment.startsWith('portfolio/') ? 'portfolio' : segment;
  return profilePath(other.basePath, switchSegment);
}

export function profilePath(basePath, segment = '') {
  if (!segment) return basePath || '/';
  const path = `${basePath}/${segment}`.replace(/\/+/g, '/');
  return path.startsWith('/') ? path : `/${path}`;
}

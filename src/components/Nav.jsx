import { NavLink } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';

const navItems = [
  { segment: '', label: 'About', end: true },
  { segment: 'experience', label: 'Experience', end: false },
  { segment: 'portfolio', label: 'Portfolio', end: false },
];

export default function Nav({ variant = 'desktop' }) {
  const { pathTo } = useProfile();

  return (
    <div className={`nav-container nav-container--${variant}`}>
      <ul className="nav">
        {navItems.map((item) => (
          <li key={item.segment || 'about'} className="nav__item">
            <NavLink
              to={pathTo(item.segment)}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

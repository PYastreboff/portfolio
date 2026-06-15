import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'About', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/portfolio', label: 'Portfolio' },
];

export default function Nav({ variant = 'desktop' }) {
  return (
    <div className={`nav-container nav-container--${variant}`}>
      <ul className="nav">
        {links.map((link) => (
          <li key={link.to} className="nav__item">
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

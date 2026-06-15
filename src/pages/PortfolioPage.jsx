import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../utils/assetUrl';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { portfolioItems } from '../data/portfolioItems';

const filters = [
  { id: '*', label: 'All' },
  { id: 'category-stack', label: 'Full-Stack' },
  { id: 'category-soft', label: 'Software Design' },
  { id: 'category-web', label: 'Web Design' },
  { id: 'category-graphics', label: 'Graphic Design' },
  { id: 'category-comm', label: 'Community' },
  { id: 'category-vol', label: 'Volunteering' },
];

export default function PortfolioPage() {
  useDocumentTitle('Portfolio');
  const [activeFilter, setActiveFilter] = useState('*');
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleItems = useMemo(() => {
    if (activeFilter === '*') return portfolioItems;
    return portfolioItems.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter]);

  const activeLabel = filters.find((filter) => filter.id === activeFilter)?.label ?? 'All';

  return (
    <>
      <div className="pb-3">
        <h1 className="title title--h1 title__separate">Portfolio</h1>
      </div>

      <div className="portfolio-toolbar">
        <div className={`select${menuOpen ? ' is-open' : ''}`}>
        <span
          className="placeholder"
          role="button"
          tabIndex={0}
          onClick={() => setMenuOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setMenuOpen((open) => !open);
            }
          }}
        >
          {activeFilter === '*' ? 'Select category' : activeLabel}
        </span>
        <ul className="filter">
          <li className="filter__item">Category</li>
          {filters.map((filter) => (
            <li
              key={filter.id}
              className={`filter__item${activeFilter === filter.id ? ' active' : ''}`}
            >
              <a
                className={`filter__link${activeFilter === filter.id ? ' active' : ''}`}
                href="#filter"
                onClick={(event) => {
                  event.preventDefault();
                  setActiveFilter(filter.id);
                  setMenuOpen(false);
                }}
              >
                {filter.label}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="gallery-grid">
        {visibleItems.map((item) => (
          <div
            key={item.slug}
            className={`gallery-grid__item ${item.categories.join(' ')}`.trim()}
          >
            <Link to={`/portfolio/${item.slug}`}>
              <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image cover" src={assetUrl(item.image)} alt={item.alt} />
              </div>
              <div className="gallery-grid__caption">
                <h3 className="title gallery-grid__title">{item.title}</h3>
                <span className="gallery-grid__category">{item.categoryLabel}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

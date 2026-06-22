import { useState } from 'react';
import { Link } from 'react-router-dom';
import site from '../../data/site.json';
import { useProfile } from '../context/ProfileContext';
import { assetUrl } from '../utils/assetUrl';

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  const { profile, switchTo } = useProfile();

  return (
    <aside className="col-12 col-md-12 col-xl-3">
      <div className="sidebar box-outer sticky-column">
        <div className="sidebar__base-info">
          <figure className="avatar-box">
            <img src={assetUrl(site.avatar)} alt={site.avatarAlt} />
          </figure>

          <div className="text-xl-center">
            <h3 className="title title--h3 sidebar__name">{site.name}</h3>
            <div className="badge">{profile.role}</div>
          </div>

          <button
            type="button"
            className="btn btn--small btn--icon-right sidebar__btn"
            onClick={() => setShowContacts((open) => !open)}
          >
            <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
            <i className="fa fa-chevron-down" />
          </button>
        </div>

        <div className="profile-switch">
          <Link
            className="profile-switch__link"
            to={switchTo}
            aria-label={`Switch to ${profile.switchLabel}`}
          >
            {profile.switchLabel}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>

        <div
          className="sidebar__additional-info"
          style={{ display: showContacts ? 'block' : 'none' }}
        >
          <div className="separation" />
          <ul className="details-info">
            <li className="details-info__item">
              <span className="box box--s2 icon-box">
                <i className="fa-regular fa-envelope" aria-hidden="true" />
              </span>
              <div className="contacts-block__info">
                <span className="overhead">Email</span>
                <a className="text-overflow" href={`mailto:${site.email}`} title={site.email}>
                  {site.email}
                </a>
              </div>
            </li>
            {site.phone && (
              <li className="details-info__item">
                <span className="box box--s2 icon-box">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                </span>
                <div className="contacts-block__info">
                  <span className="overhead">Phone</span>
                  <a
                    className="text-overflow"
                    title={site.phone.tel}
                    href={`tel:${site.phone.tel}`}
                  >
                    {site.phone.display}
                  </a>
                </div>
              </li>
            )}
            <li className="details-info__item">
              <span className="box box--s2 icon-box">
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
              </span>
              <div className="contacts-block__info">
                <span className="overhead">Location</span>
                <a
                  className="text-overflow"
                  title={site.location.label}
                  href={site.location.url}
                >
                  {site.location.label}
                </a>
              </div>
            </li>
            <li className="details-info__item">
              <span className="box box--s2 icon-box">
                <i className="fa-brands fa-github" aria-hidden="true" />
              </span>
              <div className="contacts-block__info">
                <span className="overhead">Github</span>
                <a
                  className="text-overflow"
                  href={site.github.url}
                  title={`Github: ${site.github.username}`}
                >
                  {site.github.username}
                </a>
              </div>
            </li>
          </ul>
          <div className="separation d-xl-none" />

          <div className="social">
            {site.social.map((link) => (
              <a key={link.url} className="social__link" href={link.url} target="_blank" rel="noreferrer">
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

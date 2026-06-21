import { Link, Navigate, useParams } from 'react-router-dom';
import { assetUrl } from '../utils/assetUrl';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useProfile } from '../context/ProfileContext';

export default function ProjectPage() {
  const { slug } = useParams();
  const { content, pathTo } = useProfile();
  const project = content.projects.find((entry) => entry.slug === slug);

  useDocumentTitle();

  if (!project) {
    return <Navigate to={pathTo('portfolio')} replace />;
  }

  const bodyParagraphs = project.paragraphs.filter(
    (paragraph) => !project.website || paragraph !== project.website.label,
  );

  return (
    <>
      <div className="pb-3">
        <h1 className="title title--h1 title__separate">Portfolio</h1>
      </div>

      <Link className="btn-back" to={pathTo('portfolio')}>
        <i className="fa-solid fa-arrow-left" />
        Back to Portfolio
      </Link>

      <header className="header-project">
        <h1 className="title title--h1">{project.title}</h1>
        <div className="header-project__image-wrap">
          <img className="cover" src={assetUrl(project.image)} alt="" />
        </div>
      </header>

      <ul className="details-info details-info--inline">
        <li className="details-info__item">
          <span className="box box--s2 icon-box">
            <i className="fa-regular fa-user" aria-hidden="true" />
          </span>
          <div className="details-info__info">
            <span className="overhead">Client</span>
            {project.client}
          </div>
        </li>
        <li className="details-info__item">
          <span className="box box--s2 icon-box">
            <i className="fa-solid fa-layer-group" aria-hidden="true" />
          </span>
          <div className="details-info__info">
            <span className="overhead">Category</span>
            {project.category}
          </div>
        </li>
        <li className="details-info__item">
          <span className="box box--s2 icon-box">
            <i className="fa-regular fa-calendar-days" aria-hidden="true" />
          </span>
          <div className="details-info__info">
            <span className="overhead">Date</span>
            {project.date}
          </div>
        </li>
      </ul>

      {bodyParagraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {project.website && (
        <a href={project.website.url} target="_blank" rel="noreferrer">
          <p>{project.website.label}</p>
        </a>
      )}
    </>
  );
}

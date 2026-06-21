import { useDocumentTitle } from '../hooks/useDocumentTitle';
import ProgressBar from '../components/ProgressBar';
import { useProfile } from '../context/ProfileContext';

function Timeline({ items, showPeriod = true }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={item.title} className="timeline__item">
          <h5 className="title title--h4 timeline__title">{item.title}</h5>
          {showPeriod && item.period && <span className="timeline__period">{item.period}</span>}
          <p className="timeline__description">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

function SectionHeading({ icon, title }) {
  return (
    <h2 className="title title--h2">
      <span className="box box--s2 icon-box">
        <i className={icon} aria-hidden="true" />
      </span>
      {title}
    </h2>
  );
}

export default function ExperiencePage() {
  const { content, profile } = useProfile();
  useDocumentTitle(`${profile.id === 'engineering' ? 'Engineering — ' : ''}Experience`);

  return (
    <>
      <div className="pb-3">
        <h1 className="title title--h1 title__separate">Experience</h1>
      </div>

      {content.experienceSections.map((section) => (
        <div key={section.title}>
          <SectionHeading icon={section.icon} title={section.title} />
          <Timeline items={section.items} showPeriod={section.showPeriod} />
        </div>
      ))}

      <h2 className="title title--h2 mt-3">My Skills</h2>
      <div className="box box--s2 box-inner mb-0">
        {content.skills.map((skill) => (
          <ProgressBar key={skill.name} label={skill.name} level={skill.level} />
        ))}
      </div>
    </>
  );
}

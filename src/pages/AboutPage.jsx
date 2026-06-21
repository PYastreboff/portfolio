import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useProfile } from '../context/ProfileContext';

export default function AboutPage() {
  const { content, profile } = useProfile();
  useDocumentTitle(`${profile.id === 'engineering' ? 'Engineering — ' : ''}About`);

  return (
    <>
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 title__separate">About Me</h1>
        <p>
          <b>Hi!</b> {content.about.intro.replace(/^Hi!\s*/i, '')}
        </p>
        <p>{content.about.body}</p>
      </div>

      <div className="top-boxes">
        {content.stats.map((stat) => (
          <div key={stat.label} className="top-box">
            <div className="case-item box box--s2 box-inner">
              <div className="top-box__content">
                <h3 className="title title--h3 top">{stat.value}</h3>
                <p className="case-item__caption cap">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="title title--h2 mt-3">What I'm Doing</h2>
      <div className="row">
        {content.services.map((service) => (
          <div key={service.title} className="col-12 col-lg-6">
            <div className="case-item box box--s2 box-inner">
              <i className={`case-item__icon ${service.icon}`} />
              <div>
                <h3 className="title title--h3">{service.title}</h3>
                <p className="case-item__caption">{service.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

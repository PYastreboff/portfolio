import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { services, stats } from '../data/content';

export default function AboutPage() {
  useDocumentTitle('About');

  return (
    <>
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 title__separate">About Me</h1>
        <p>
          <b>Hi!</b> I'm Peter I am a responsible and focused Computer Science and Engineering
          student with experience in software and web design.
        </p>
        <p>
          My work ethic is paramount, and I believe in completing every task with precision and
          effort. I take pride in my attention to detail and commitment to meeting deadlines,
          ensuring that my contributions positively impact any team. Employers will find me a
          motivated and diligent individual, ready to tackle challenges and exceed expectations in
          software development.
        </p>
      </div>

      <div className="top-boxes">
        {stats.map((stat) => (
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
        {services.map((service) => (
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

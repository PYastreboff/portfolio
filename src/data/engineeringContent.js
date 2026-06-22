export const about = {
  intro:
    "Hi! I'm Peter — an Aerospace Engineering and Computer Science student at UNSW with hands-on experience in mechanical design, CAD modelling, and additive manufacturing.",
  body:
    "I enjoy turning concepts into physical prototypes, from parametric CAD assemblies to finished 3D-printed parts. Whether it's refining tolerances for a functional prototype or iterating on an aerospace-inspired design, I focus on precision, manufacturability, and clear engineering documentation.",
};

export const education = [
  {
    title: 'University of New South Wales',
    period: '2023 — Present',
    description:
      'Dual degree in Aerospace Engineering and Computer Science, combining mechanical design, materials, and simulation with practical prototyping.',
  },
  {
    title: 'St. Pius X College',
    period: '2016 — 2022',
    description:
      'High School Certificate with strong results in mathematics, physics, and design & technology.',
  },
];

export const accolades = [
  {
    title: 'ADF Future Innovators Long Tan Award',
    description:
      'Recognised for innovation and achievement with strong relevance to engineering and defence technology pathways.',
  },
  {
    title: 'Academic Honours',
    description: 'Awarded for achieving in the top 15% of the cohort.',
  },
];

export const experience = [
  {
    title: 'UNSW AeroSoc (AIAA)',
    period: '2026 — Present',
    description:
      'Contributing to society projects spanning promotional campaigns, event support, and design work connected to the student aerospace community.',
  },
  {
    title: 'Personal Engineering Projects',
    period: '2022 — Present',
    description:
      'Independent CAD modelling, 3D printing, and prototyping work — exploring aerospace forms, functional assemblies, and iterative design workflows.',
  },
  {
    title: 'Team Lead — UNSW Solar Car Project (DESN1K)',
    period: 'January 2023 — May 2023',
    description:
      'Led a DESN1K project team developing a solar car concept — overseeing the sleek body design, 3D-printed prototype, and integration of electronics including Arduino-based prototyping for control and testing.',
  },
  {
    title: 'St Pius X Robotics Coach',
    period: '2020 — 2022',
    description:
      'Coached the college robotics program, mentoring students through Arduino-based soccer robots, EV3 Mindstorms builds, and Python plugins for Mindstorms — covering design, coding, competition prep, and practical skills in mechanical systems and teamwork.',
  },
];

export const skills = [
  { name: 'CAD (SolidWorks / Fusion 360)', level: 85 },
  { name: '3D Printing', level: 80 },
  { name: 'Technical Drawing & GD&T', level: 75 },
  { name: 'Prototyping & Iteration', level: 80 },
  { name: 'Teamwork', level: 85 },
  { name: 'Project Management', level: 75 },
  { name: 'MATLAB', level: 70 },
  { name: 'Materials & Manufacturing', level: 70 },
  { name: 'CNC / Workshop Fundamentals', level: 55 },
  { name: 'Python (Engineering Scripts)', level: 75 },
  { name: 'Documentation & Design Reviews', level: 80 },
];

export const services = [
  {
    icon: 'fa-solid fa-compass-drafting',
    title: 'Mechanical Design',
    caption: 'Concept-to-part design with attention to fit, function, and manufacturability.',
  },
  {
    icon: 'fa-solid fa-cube',
    title: 'CAD Modelling',
    caption: 'Parametric models, assemblies, and export-ready files for production or printing.',
  },
  {
    icon: 'fa-solid fa-print',
    title: '3D Printing',
    caption: 'FDM and resin prototyping — from first draft prints to refined functional parts.',
  },
  {
    icon: 'fa-solid fa-gears',
    title: 'Prototyping',
    caption: 'Rapid iteration on mechanical concepts with practical, testable outcomes.',
  },
];

export const stats = [
  { value: '100+', label: 'CAD MODELS' },
  { value: '1000+', label: 'PRINTS COMPLETED' },
  { value: '8+', label: 'YEARS MAKING' },
];

export const experienceSections = [
  {
    title: 'Accolades',
    icon: 'fa-solid fa-award',
    items: accolades,
    showPeriod: false,
  },
  {
    title: 'Experience',
    icon: 'fa-solid fa-briefcase',
    items: experience,
    showPeriod: true,
  },
  {
    title: 'Education',
    icon: 'fa-solid fa-book-open',
    items: education,
    showPeriod: true,
  },
];

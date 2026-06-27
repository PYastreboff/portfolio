import { f22FanpageProject } from './f22Fanpage';

export const projects = [
  {
    slug: '3d-printing',
    title: 'CAD & Prototyping',
    image: '/img/3d-printing.png',
    client: 'Personal Project',
    category: '3D Printing',
    date: '2022 — Present',
    paragraphs: [
      'An ongoing collection of models designed in Autodesk Fusion 360 and SolidWorks, then printed on my Bambu Lab A1. The work spans functional parts, display prototypes, and iterative design studies — each going from parametric CAD through slicing, print tuning, and finished assembly.',
      'This portfolio of prints reflects a full design-to-desk workflow: modelling with design intent, choosing materials and orientations for FDM, refining tolerances across revisions, and publishing select models for others to download and print.',
      'makerworld.com/en/@user_2253234132',
    ],
    website: {
      url: 'https://makerworld.com/en/@user_2253234132?appSharePlatform=copy',
      label: 'makerworld.com/en/@user_2253234132',
    },
  },
  {
    slug: 'f22-cad',
    title: 'F-22 Raptor — Parametric CAD Study',
    image: '/img/f22-cad-fusion.png',
    client: 'Personal Project',
    category: 'CAD & Modelling',
    date: '2025 — 2026',
    paragraphs: [
      'A detailed CAD study of the F-22 Raptor focused on capturing major aerodynamic surfaces, panel lines, and proportional accuracy across orthographic views. The model was built to explore assembly structure, reference geometry, and export workflows for both visualisation and prototyping.',
      'This project strengthened my approach to complex surface modelling, design intent, and documenting revisions as the model evolved from block-out geometry to a refined multi-view assembly.',
    ],
  },
  { ...f22FanpageProject, category: 'CAD & Aerospace' },
  {
    slug: 'aerosoc-eng',
    title: 'UNSW AeroSoc — Engineering & Society Work',
    image: '/img/aerosoc.png',
    client: 'UNSW AeroSoc (AIAA)',
    category: 'Aerospace',
    date: '2026 — Present',
    paragraphs: [
      'Contributing to UNSW AeroSoc initiatives that connect aerospace interest with practical student projects, events, and outreach. Work spans design support, promotional material tied to engineering themes, and helping present the society’s technical identity to new members.',
      'Being part of the society keeps engineering work grounded in a community that values flight, design, and hands-on problem solving.',
    ],
    website: {
      url: 'https://www.instagram.com/unswaerosoc_aiaa/',
      label: 'www.instagram.com/unswaerosoc_aiaa',
    },
  },
  {
    slug: 'hypersonic',
    title: 'A virtual Wind Tunnel',
    image: '/img/hyper.png',
    client: 'Personal Project',
    category: 'Aerospace',
    date: 'July 2026',
    paragraphs: [
      'A collection of CAD projects created in SolidWorks, showcasing a range of functional components and my experience, mechanical assemblies, concept models, and design explorations. Each project demonstrates the process from parametric modelling and feature development to detailed refinement and final presentation.',
      'This portfolio highlights a complete engineering design workflow, including design intent, part and assembly modelling, configuration management, tolerance considerations, iterative revisions, and the production of technical drawings and visualisations for manufacture or prototyping.',
    ],
    website: {
      url: 'https://pyastreboff.github.io/hypersonics-visualiser/',
      label: 'pyastreboff.github.io/hypersonics-visualiser',
    },
  },
  {
    slug: 'solidworks',
    title: 'My Advanced and Far Reaching Solidworks Experiences',
    image: '/img/solid_cad.png',
    client: 'Clients, Personal & University',
    category: 'CAD',
    date: '2022 — Present',
    paragraphs: [
      'A collection of CAD projects created in SolidWorks, showcasing a range of functional components and my experience, mechanical assemblies, concept models, and design explorations. Each project demonstrates the process from parametric modelling and feature development to detailed refinement and final presentation.',
      'This portfolio highlights a complete engineering design workflow, including design intent, part and assembly modelling, configuration management, tolerance considerations, iterative revisions, and the production of technical drawings and visualisations for manufacture or prototyping.',
    ],
    website: {
      url: 'https://www.solidworks.com/',
      label: 'www.solidworks.com',
    },
  },
  {
    slug: 'solar-car',
    title: 'UNSW Solar Car — DESN1K Project',
    image: '/img/solar-car-team.png',
    client: 'UNSW — DESN1K',
    category: 'Prototyping & 3D Printing',
    date: 'January 2023 — May 2023',
    paragraphs: [
      'DESN1K project, working as team leader on a solar car design from concept through to a physical prototype. I drove the sleek exterior form in CAD and had the body 3D printed to validate proportions, aerodynamic intent, and assembly before full-scale build decisions.',
      'The project combined mechanical design with hands-on prototyping — including electronics work and Arduino-based prototyping to test control logic and subsystem behaviour early in the development cycle, while coordinating the team across design, fabrication, and integration milestones.',
    ],
  },
  {
    slug: 'spx-soccer-robot',
    title: 'St Pius X Robotics Coach',
    image: '/img/spx-robotics-openday.png',
    client: 'St Pius X College',
    category: 'Robotics & Prototyping',
    date: '2020 — 2022',
    paragraphs: [
      'Coached the college robotics program and helped students design and build Arduino-based soccer robots — from chassis layout and wiring through to tuning movement and ball interaction on a mini pitch. I also taught EV3 Mindstorms and Python plugins for Mindstorms, guiding students through programming and integration alongside the mechanical builds.',
      'The photo shows students showing off their robot on open day, demonstrating the finished build to visitors and walking through how the hardware, sensors, and code came together as a working team project.',
    ],
  },
];

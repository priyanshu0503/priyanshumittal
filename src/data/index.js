// ── data/index.js ──
// Single source of truth for all portfolio content.
// Update here → reflects everywhere.

export const NAV_LINKS = ['about', 'skills', 'projects', 'voyage', 'news', 'contact']

export const HERO = {
  tag:   'BSc Applied Computer Science — Grad Oct 2026',
  name:  ['PRIYANSHU', 'MITTAL'],
  pills: ['AI Developer', 'Full Stack Engineer', 'ML Researcher', 'ACM President'],
  bio:   'Navigating the deep waters of machine learning, computer vision, and scalable systems — building technology that surfaces real-world insights from beluga whales in Arctic imagery to early viral detection.',
}

export const ABOUT = {
  paragraphs: [
    "AI Developer and Full Stack Engineer at the University of Winnipeg — Co-op eligible, graduating October 2026. My work sits at the intersection of computer vision, machine learning, and production software.",
    "Building YOLO-based marine detection systems at the Assiniboine Conservatory and leading the ACM Student Chapter as President. HMPV Early Prediction research was a Falling Walls Lab Manitoba finalist — Top 10.",
    "Exchange scholar at South Dakota State University. Multiple Dean's List recognitions. The sharpest engineers are also teachers — I carry that into every project, TA session, and mentorship.",
  ],
  awards: ["Dean's List '24 & '25", "Falling Walls Finalist", "Exchange Scholar", "Entrance Scholarship"],
  stats: [
    { num: '3',        label: 'Active Roles' },
    { num: '2',        label: 'Research Projects' },
    { num: '100+',     label: 'Students Supported' },
    { num: 'Oct 2026', label: 'Graduation' },
  ],
}

export const SKILLS = {
  Languages:  [['Python',95],['TypeScript',88],['JavaScript',88],['Java',82],['C++',78],['C',75],['SQL',85]],
  Frameworks: [['React',90],['Node.js',85],['TensorFlow',85],['Tailwind CSS',88],['Firebase',80]],
  'AI / ML':  [['Scikit-Learn',90],['Pandas',92],['NumPy',92],['YOLO',88],['ML Pipelines',85]],
  Tools:      [['Git',92],['Docker',80],['LaTeX',78],['Cascade CMS',70]],
}

export const PROJECTS = [
  {
    num:      '01',
    title:    'Beluga Whale Detection',
    finalist: false,
    desc:     "YOLO-based CV system to detect and count beluga whales in underwater imagery. Automated frame-processing pipeline generates real-time population estimates. Extended to classify multiple jellyfish species.",
    impact:   'Real-world marine population monitoring at Assiniboine Conservatory',
    stack:    ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'Docker'],
  },
  {
    num:      '02',
    title:    'RNAverse',
    finalist: false,
    desc:     "Full ML/DL platform for RNA methylation prediction — end-to-end pipeline from raw sequence input to visualised output. Multi-model integration with preprocessing, validation, and a web interface with batch processing.",
    impact:   'Accelerates bioinformatics research workflows',
    stack:    ['Python', 'Scikit-Learn', 'React', 'Node.js', 'Firebase'],
  },
  {
    num:      '03',
    title:    'HMPV Early Prediction System',
    finalist: true,
    desc:     "ML model for early-stage HMPV detection — end-to-end data pipeline covering preprocessing, feature engineering, and model training to identify key health patterns for faster case identification.",
    impact:   'Top 10 Finalist, Falling Walls Lab Manitoba 2025',
    stack:    ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Feature Engineering'],
  },
]

export const EXPERIENCE = [
  {
    period: 'Jan 2026 — Present',
    role:   'AI Research Assistant',
    org:    'Assiniboine Conservatory, Winnipeg, MB',
    bullets: [
      'Built YOLO-based CV system to detect and count beluga whales in underwater imagery.',
      'Improved detection by tuning confidence thresholds and reducing duplicate predictions.',
      'Developed automated pipeline to process frames and generate population estimates.',
      'Extended project to classify multiple jellyfish species using YOLO-based models.',
    ],
    tags: ['YOLO', 'Computer Vision', 'PyTorch', 'Python'],
  },
  {
    period: 'Jun 2025 — Aug 2025',
    role:   'Software Design Intern',
    org:    'Cencadian Educational Inc, Winnipeg, MB',
    bullets: [
      'Contributed to an automated accounting platform for non-profit organizations.',
      'Built responsive front-end components with React, TypeScript, and Tailwind CSS.',
      'Supported secure database design for financial records and recurring transactions.',
      'Assisted in code reviews, debugging, and usability testing.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    period: 'Jan 2026 — Present',
    role:   'EDI Hub Assistant',
    org:    'University of Winnipeg',
    bullets: [
      'Updated EDI Hub website using Cascade CMS to keep resources current.',
      'Supported administrative operations and communication with campus partners.',
      'Promoted inclusive programs and improved student engagement.',
    ],
    tags: ['Cascade CMS', 'Community', 'Communication'],
  },
  {
    period: 'Jan 2025 — Present',
    role:   'Teaching Assistant',
    org:    'University of Winnipeg',
    bullets: [
      'Evaluated assignments and exams for 100+ students with accuracy and consistency.',
      'Supported students in developing problem-solving skills and core math concepts.',
      'Assisted with grade management and final grade submission.',
    ],
    tags: ['Mentorship', 'Mathematics', 'Academic Support'],
  },
  {
    period: 'Aug 2025 — Present',
    role:   'Student Ambassador',
    org:    'University of Winnipeg',
    bullets: [
      'Represented the university at recruitment and outreach events.',
      'Served as primary contact for incoming students easing university transition.',
      'Delivered campus tours and orientation sessions for new students.',
      'Mentored international students on academic planning and adapting to Canadian education.',
    ],
    tags: ['Leadership', 'Outreach', 'International Students'],
  },
]

export const NEWS = [
  {
    type:  'Competition',
    title: 'Falling Walls Lab Manitoba — Finalist',
    org:   'Falling Walls Foundation',
    desc:  'Selected Top 10 finalist for the HMPV Early Prediction System — a global competition recognising breakthrough ideas across science, business, and society.',
    year:  '2025',
  },
  {
    type:  'Startup',
    title: 'FeelLift — Top 10, North Forge Ramp Up',
    org:   'North Forge Technology Exchange',
    desc:  'Selected in the Top 10 for FeelLift at the North Forge Ramp Up accelerator program, recognising early-stage ventures with strong innovation and market potential.',
    year:  '2026',
  },
  {
    type:  'Research',
    title: 'Research Poster Competition',
    org:   'University of Winnipeg',
    desc:  'Participated alongside supervisors Dr. Tabitha Wood and Dr. Melanie Martin, presenting AI and biomedical research findings at the university-wide poster competition.',
    year:  '2025',
  },
]

export const LEADERSHIP = [
  {
    title:  'President, ACM Student Chapter',
    org:    'Association of Computing Machinery',
    period: 'Jul 2025 — Present',
    desc:   'Leading the executive team with strategic planning and growth initiatives. Organised workshops, tech panels, and networking events to grow student and industry engagement.',
  },
  {
    title:  'Falling Walls Lab Finalist',
    org:    'Top 10 — Manitoba 2025',
    period: '2025',
    desc:   "Selected Top 10 finalist for the HMPV Early Prediction System — a research presentation competition recognising breakthrough scientific ideas.",
  },
  {
    title:  "Dean's List — Multiple Years",
    org:    'U of Winnipeg + South Dakota State',
    period: '2024, 2025',
    desc:   "Recognised on the Dean's Honor List at both institutions. Entrance Scholarship and Exchange Scholarship recipient.",
  },
  {
    title:  'Community Volunteer',
    org:    'Humane Society + U-Turn Parkinson',
    period: 'Jun 2025 — Sep 2025',
    desc:   'Supported community outreach promoting awareness of animal welfare and neurological health. Assisted with event coordination and fundraising operations.',
  },
]

export const CONTACT_LINKS = [
  { label: 'priyanshu625@yahoo.com', sub: 'Email · University',  href: 'mailto:mittal-p8@webmail.uwinnipeg.ca' },
  { label: 'linkedin.com/in/priyanshumittall', sub: 'LinkedIn · Connect', href: 'https://linkedin.com/in/priyanshumittal' },
  { label: '431-998-2561',                    sub: 'Phone · Winnipeg',   href: 'tel:4319982561' },
  { label: 'github.com/priyanshu0503',       sub: 'GitHub · Code',     href: 'https://github.com/priyanshu0503'},
]

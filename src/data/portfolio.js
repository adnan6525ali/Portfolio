const githubHome = 'https://github.com/adnan6525ali';

export const profile = {
  name: 'Mohammad Adnan Ali',
  email: 'adnan6525ali@gmail.com',
  phone: '+917408983774',
  phoneDisplay: '+91 7408983774',
  linkedin: 'https://www.linkedin.com/in/adnan6525ali/',
  github: githubHome,
  resume: '/MohammadAdnanAliResume.pdf',
};

export const stats = [
  { value: 'M.Tech', label: 'Computer Science' },
  { value: 'Python', label: 'Primary Stack' },
  { value: 'ML + APIs', label: 'Core Focus' },
];

export const aboutHighlights = [
  {
    title: 'Backend Development',
    description: 'Building clean Django, Flask, and FastAPI services with practical database design.',
  },
  {
    title: 'Machine Learning Models',
    description: 'Developing predictive systems with feature engineering, model evaluation, and iteration.',
  },
  {
    title: 'REST APIs',
    description: 'Designing authenticated CRUD workflows that are reliable, readable, and integration-ready.',
  },
];

export const skillGroups = [
  {
    title: 'Programming',
    accent: 'cyan',
    skills: [{ name: 'Python', level: 92 }],
  },
  {
    title: 'ML & Data',
    accent: 'mint',
    skills: [
      { name: 'Scikit-learn', level: 84 },
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 86 },
      { name: 'PyTorch', level: 72 },
    ],
  },
  {
    title: 'Web',
    accent: 'coral',
    skills: [
      { name: 'Django', level: 86 },
      { name: 'Flask', level: 78 },
      { name: 'FastAPI', level: 74 },
    ],
  },
  {
    title: 'Database',
    accent: 'gold',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'SQLite', level: 84 },
    ],
  },
  {
    title: 'Tools',
    accent: 'cyan',
    skills: [
      { name: 'GitHub', level: 88 },
      { name: 'Docker', level: 68 },
    ],
  },
  {
    title: 'Concepts',
    accent: 'mint',
    skills: [
      { name: 'REST API', level: 86 },
      { name: 'OOP', level: 90 },
      { name: 'DSA', level: 78 },
      { name: 'Authentication', level: 82 },
      { name: 'CRUD', level: 90 },
    ],
  },
];

export const projects = [
  {
    title: 'Water Temperature Prediction System',
    description:
      'Spatio-temporal ML pipeline for water temperature forecasting using PCA/EOF features, time-depth cubes, and model comparison across tree and sequence models.',
    highlights: ['Spatio-temporal analysis', 'XGBoost, LightGBM, LSTM', 'PCA / EOF', 'Time-depth temperature cube'],
    tags: ['Python', 'XGBoost', 'LightGBM', 'LSTM', 'PCA'],
    gradient: 'from-cyanGlow/25 via-mintGlow/15 to-transparent',
    githubUrl: githubHome,
    liveUrl: '',
  },
  {
    title: 'Web Scraping System',
    description:
      'Automated scraping workflow that extracts, cleans, validates, and structures web data for downstream analytics and storage.',
    highlights: ['Automated scraping', 'BeautifulSoup parsing', 'Data extraction', 'Cleaning pipeline'],
    tags: ['Python', 'BeautifulSoup', 'Pandas', 'Automation'],
    gradient: 'from-coralGlow/20 via-goldGlow/15 to-transparent',
    githubUrl: githubHome,
    liveUrl: '',
  },
  {
    title: 'Authentication Web App',
    description:
      'Django authentication system with login flows, OTP verification, secure sessions, and production-minded form validation.',
    highlights: ['Django login system', 'OTP verification', 'Secure sessions', 'Auth-first UX'],
    tags: ['Django', 'SQLite', 'OTP', 'Sessions'],
    gradient: 'from-mintGlow/20 via-cyanGlow/15 to-transparent',
    githubUrl: githubHome,
    liveUrl: '',
  },
];

export const timeline = [
  {
    period: '2025 - Present',
    title: 'M.Tech Computer Science',
    institution: 'Amrita Vishwa Vidyapeetham',
    description: 'Advanced study focused on computer science, software engineering, and machine learning systems.',
  },
  {
    period: '2020 - 2024',
    title: 'B.Tech',
    institution: 'RGPV Bhopal',
    description: 'Built a strong foundation in programming, data structures, databases, and web application development.',
  },
];

export const certifications = ['Python Programming', 'Django Development'];

export const achievements = ['Logic Building Coding Competition Winner'];

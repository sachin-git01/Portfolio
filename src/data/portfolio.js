import {
  FaBootstrap,
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedinIn,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { TbBrandLeetcode, TbDatabase, TbGitBranch } from 'react-icons/tb';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'mini-projects', label: 'Mini Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const heroStats = [
  { value: '250+', label: 'DSA Problems' },
  { value: '3+', label: 'Hackathons' },
  { value: '2026', label: 'Internship Ready' }
];

export const skills = [
  { name: 'HTML', icon: FaHtml5, tone: '#ff6b35' },
  { name: 'CSS', icon: FaCss3Alt, tone: '#00e5ff' },
  { name: 'JavaScript', icon: SiJavascript, tone: '#ffd166' },
  { name: 'React', icon: FaReact, tone: '#61dafb' },
  { name: 'Node.js', icon: FaNodeJs, tone: '#2df7a7' },
  { name: 'Express', icon: SiExpress, tone: '#c8d3ff' },
  { name: 'MongoDB', icon: SiMongodb, tone: '#2df7a7' },
  { name: 'SQL', icon: TbDatabase, tone: '#4ea8ff' },
  { name: 'Firebase', icon: SiFirebase, tone: '#ffb703' },
  { name: 'Java', icon: FaJava, tone: '#ff4f88' },
  { name: 'DSA', icon: TbBrandLeetcode, tone: '#ffa116' },
  { name: 'GitHub', icon: FaGithub, tone: '#ffffff' },
  { name: 'Tailwind', icon: SiTailwindcss, tone: '#38bdf8' },
  { name: 'Bootstrap', icon: FaBootstrap, tone: '#9b5cff' },
  { name: 'Git', icon: TbGitBranch, tone: '#ff7a45' }
];

export const projects = [
  {
    title: 'LeetCode Progress Tracker',
    year: '2026',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    summary:
      'Full-stack dashboard for managing coding practice records with REST APIs, persistent MongoDB storage, topic notes, difficulty tracking, and solving history.',
    highlight: 'CRUD APIs, async data handling, responsive dashboard'
  },
  {
    title: 'Parking Space Counter using OpenCV',
    year: '2025',
    stack: ['Python', 'OpenCV', 'cvzone', 'NumPy', 'Pickle', 'Image Processing'],
    summary:
      'Computer vision system that detects free and occupied parking spaces from video using manually saved slot coordinates, thresholding, dilation, and pixel-count analysis.',
    highlight: '69 mapped spaces, live free-space counter, green/red occupancy overlay'
  },
  {
    title: 'Multi-Step Loan Application Platform',
    year: '2026',
    stack: ['React.js', 'React Hook Form', 'Zod', 'JavaScript'],
    summary:
      'Production-level 8-step loan workflow with PAN and Aadhaar verification, document uploads, EMI calculation, eligibility checks, auto-save, and cross-step validation.',
    highlight: 'Dynamic validation, conditional workflows, reusable forms'
  },
  {
    title: 'GalleryFlow Photo Uploading Website',
    year: '2025',
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    summary:
      'Responsive photo-sharing platform with Firebase Authentication, cloud image uploads, real-time rendering, and optimized front-end performance across devices.',
    highlight: 'Auth, Firebase Storage, real-time gallery'
  }
];

export const miniProjects = [
  {
    title: 'Todo List',
    year: 'Mini',
    stack: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'DOM'],
    summary: 'Task manager for adding, completing, filtering, and deleting daily tasks with persistent local storage.',
    highlight: 'CRUD logic, browser storage, clean task UI'
  },
  {
    title: 'Weather App',
    year: 'Mini',
    stack: ['HTML', 'CSS', 'JavaScript', 'Fetch API', 'Weather API'],
    summary: 'City-based weather dashboard showing temperature, conditions, humidity, wind, and responsive weather states.',
    highlight: 'API integration, async JavaScript, responsive cards'
  },
  {
    title: 'Calculator',
    year: 'Mini',
    stack: ['HTML', 'CSS', 'JavaScript', 'DOM Events'],
    summary: 'Interactive calculator with arithmetic operations, clear controls, and keyboard-friendly input behavior.',
    highlight: 'Event handling, expression logic, polished UI'
  },
  {
    title: 'Digital Clock',
    year: 'Mini',
    stack: ['HTML', 'CSS', 'JavaScript', 'Date API', 'setInterval'],
    summary: 'Live digital clock with real-time hours, minutes, seconds, and a clean animated display.',
    highlight: 'Time API, intervals, minimal interface'
  },
  {
    title: 'Stopwatch',
    year: 'Mini',
    stack: ['HTML', 'CSS', 'JavaScript', 'Timer Logic', 'DOM'],
    summary: 'Stopwatch with start, pause, reset, and precise elapsed-time rendering for practice with timer state.',
    highlight: 'State control, interval cleanup, readable timer UI'
  },
  {
    title: 'Number Guessing Game',
    year: 'Mini',
    stack: ['HTML', 'CSS', 'JavaScript', 'Random Logic', 'DOM'],
    summary: 'Simple browser game where users guess a generated number and receive feedback until they win.',
    highlight: 'Game logic, validation, user feedback'
  }
];

export const timeline = [
  {
    title: 'Frontend Developer Intern',
    meta: 'ZeTheta - Remote - Jun 2026 - Present',
    body:
      'Building a production-level loan application platform with React.js, JavaScript, React Hook Form, Zod, reusable UI components, and SDLC collaboration.'
  },
  {
    title: 'Open Source Contributor',
    meta: 'GitHub - Community Development',
    body:
      'Contributing to open-source projects while improving practical development skills, version control workflow, issue understanding, and collaborative coding habits.'
  },
  {
    title: '3+ Hackathon Participant',
    meta: 'GenAI - Full Stack - Cybersecurity',
    body:
      'Participated in multiple hackathons across generative AI, full stack development, and cybersecurity domains, building fast prototypes and solving real problem statements under deadlines.'
  },
  {
    title: 'Certificates of Participation',
    meta: 'Workshops - Hackathons - Technical Events',
    body:
      'Earned multiple participation certificates from hackathons, workshops, and technical programs that strengthened project building, teamwork, presentation, and domain exploration.'
  },
  {
    title: 'B.Tech - Computer Science & Data Science',
    meta: 'Ambalika Institute of Management and Technology - 2023 - 2027',
    body: 'Current CGPA 7.88/10 with focus on full stack development, DSA, DBMS, operating systems, networks, and software engineering.'
  },
  {
    title: 'LeetCode 50 Days Badge',
    meta: 'Achievement',
    body: 'Solved 250+ DSA problems in Java across arrays, strings, linked lists, trees, graphs, dynamic programming, and recursion.'
  },
  {
    title: 'IEEE Student Member & Hackathon Organizer',
    meta: 'Leadership',
    body: 'Participated in technical events and workshops while helping coordinate a college hackathon as a core team member.'
  }
];

export const socials = [
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/', color: '#ffffff' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/', color: '#0a66c2' },
  { label: 'Email', icon: FaEnvelope, href: 'mailto:sachinofficial7310@gmail.com', color: '#ff4f88' }
];

export const contactEmail = 'sachinofficial7310@gmail.com';

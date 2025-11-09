import { Experience, ExperienceCategory, Skill, Course } from './types';

export const NAV_LINKS = [
  { name: 'About', section: 'about' },
  { name: 'Experience', section: 'experience' },
  { name: 'Leadership', section: 'leadership' },
  { name: 'Skills & Coursework', section: 'skills' },
  { name: 'Contact', section: 'contact' },
];

export const experiences: Experience[] = [
  {
    role: 'Summer Intern – Boston & Southeast Region Offices',
    company: 'Massachusetts Small Business Development Center (MSBDC)',
    period: 'June 2025 - Sept 2025',
    location: 'Newton, MA',
    description: [
      'Supporting small business clients by integrating AI tools into core business functions, including business plan development, market research, and marketing strategy.',
      'Utilizing large language models (LLMs) to automate and enhance content creation, financial forecasting, and pitch deck development.',
      'Conducting financial analyses and creating projections to inform investment decisions and strategic growth for entrepreneurs.',
      'Part of a Google.org-funded initiative to promote AI adoption in the small business ecosystem.',
    ],
    category: [ExperienceCategory.Finance],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'Slavery North Initiative, UMass Amherst',
    period: 'July 2025 - Present',
    location: 'Amherst, MA',
    description: [
      'Conducting archival research on slavery in the U.S. North and Canada, locating and transcribing handwritten 17th-19th century documents.',
      'Digitizing and inputting historical data into a public-facing database, ensuring accuracy, consistency, and metadata quality.',
      'Assisting with quality control, document tagging, and database cleaning as part of a Mellon Foundation-funded digital humanities project.',
      'Contributing to expanding public access to underrepresented histories by helping build one of the first comprehensive archives of Northern slavery.',
    ],
    category: [ExperienceCategory.Research],
  },
   {
    role: 'Summer Conference Crew',
    company: 'University of Massachusetts Amherst',
    period: 'May 2025 - Present',
    location: 'Amherst, MA',
    description: [
        'Representing the university to visiting conference guests by providing courteous and professional assistance.',
        'Collaborating with a team to handle logistics for guest accommodations, including moving and setting up rooms for large-scale events.',
        'Rotating between daytime, overnight, and early-morning shifts, demonstrating reliability and time management.'
    ],
    category: [ExperienceCategory.Operations],
  },
  {
    role: 'Strategy & Financial Modeling Intern',
    company: 'Re-Volt Charging Inc.',
    period: 'March 2025 - June 2025',
    location: 'Waltham, MA',
    description: [
      'Assisting in budget forecasting, financial modeling, and cost optimization to support clean energy and EV infrastructure projects.',
      'Conducting data-driven financial analysis to enhance operational efficiency and strategic investment decisions.',
      'Collaborating with cross-functional teams to track budget performance, assess financial risks, and optimize resource allocation.',
    ],
    category: [ExperienceCategory.Finance, ExperienceCategory.CleanEnergy],
  },
  {
    role: 'Residence Hall Security Supervisor & Monitor',
    company: 'University of Massachusetts Amherst',
    period: 'September 2023 - Present',
    location: 'Amherst, MA',
    description: [
        'Led a team of Security Monitors across multiple residential buildings, ensuring a safe and secure environment for residents.',
        'Oversaw patrol operations, enforced security protocols, and managed equipment distribution to maintain operational efficiency.',
        'Provided vigilant security, ensuring safe environments through monitoring, emergency response, and enforcement of campus policies.'
    ],
    category: [ExperienceCategory.Operations],
  },
  {
    role: 'Research & Investment Banking Intern',
    company: 'JS Global Capital Ltd.',
    period: 'December 2024 - January 2025',
    location: 'Karachi, Pakistan',
    description: [
      'Conducted equity research and analyzed financial trends, contributing to insights on portfolios worth over PKR 144 billion.',
      'Supported deal execution strategies and financial modeling in the Investment Banking Group, assisting with client presentations.',
    ],
    category: [ExperienceCategory.Finance],
  },
  {
    role: 'Risk Management, Research, Finance, Investments Intern',
    company: 'JS Investments',
    period: 'June 2024 - July 2024',
    location: 'Karachi, Pakistan',
    description: [
      'Covered over PKR 107 billion in assets across 16 mutual funds and four pension funds, contributing to financial analyses and valuations.',
      'Presented insights that enhanced asset management initiatives and ensured compliance with regulatory standards.',
    ],
    category: [ExperienceCategory.Finance],
  },
    {
    role: 'Private Banking & Wealth Management Intern',
    company: 'JS Bank',
    period: 'May 2023 - July 2023',
    location: 'Karachi, Pakistan',
    description: [
      'Analyzed 8 ultra-high net worth client profiles with diversified financial goals to provide wealth management advising.',
      'Secured a 100% return rate for new clients by performing market research to assess risk and tailor investment plans.',
    ],
    category: [ExperienceCategory.Finance],
  },
  {
    role: 'Berkshire Dining Team Member',
    company: 'University of Massachusetts Amherst Dining',
    period: 'September 2022 - May 2023',
    location: 'Amherst, MA',
    description: [
        'Worked in a dynamic, fast-paced food service environment ranked No. 1 for On-Campus Dining nationally.',
        'Responsibilities included food preparation, meal service, maintaining cleanliness, and catering.'
    ],
    category: [ExperienceCategory.Operations],
  },
  {
    role: 'Independent Stock Trader',
    company: 'Pakistan Stock Exchange',
    period: 'February 2021 – December 2022',
    location: 'Karachi, Pakistan',
    description: [
      'Achieved a 150% ROI by scaling a PKR 1M personal trading portfolio to PKR 2.5M within 22 months.',
      'Applied independent research, technical analysis, and data-driven entry/exit strategies aligned with macroeconomic trends.',
    ],
    category: [ExperienceCategory.Finance],
  },
  {
    role: 'Finance & Accounting Intern',
    company: 'Chase Department Store',
    period: 'June 2021 - July 2021',
    location: 'Karachi, Pakistan',
    description: [
        'Contributed to a 10% decrease in inventory discrepancies by utilizing accounting software for tracking and management.',
        'Assisted in preparing summary reports and analyzing financial records to ensure compliance with company standards.'
    ],
    category: [ExperienceCategory.Finance],
  },
];


export const skills: Skill[] = [
    { name: 'Financial Modeling' },
    { name: 'Python' },
    { name: 'Excel' },
    { name: 'VBA' },
    { name: 'SAS' },
    { name: 'Data Analysis' },
    { name: 'Valuation' },
    { name: 'Risk Assessment' },
    { name: 'Equity Research' },
    { name: 'Econometrics' },
    { name: 'LLM Workflows' },
    { name: 'Automation' },
    { name: 'PowerPoint' },
    { name: 'AI Applications'},
    { name: 'Business Planning'},
    { name: 'Operational Efficiency'},
];

export const courses: Course[] = [
    { id: 'FIN 301', title: 'Corporation Finance' },
    { id: 'FIN 304', title: 'Financial Modeling' },
    { id: 'FIN 305', title: 'Investments' },
    { id: 'FIN 404', title: 'Bank Management' },
    { id: 'RES-ECON 312', title: 'Decision Analysis' },
    { id: 'RES-ECON 313', title: 'Intermediate Statistics' },
    { id: 'RES-ECON 452', title: 'Industrial Organization' },
    { id: 'OIM 301', title: 'Intro to Managerial Economics' },
];
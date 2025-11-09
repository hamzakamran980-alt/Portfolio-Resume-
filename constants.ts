
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
      'Supported small business clients by developing AI-driven financial models, ratio analyses, and pro forma statements with Excel-based tools.',
      'Utilized large language models (LLMs) to automate and enhance content creation, financial forecasting, and pitch deck development.',
      'Conducted market research to enhance client funding readiness and strategic growth as part of a Google.org-funded initiative.',
    ],
    category: [ExperienceCategory.Finance],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'Slavery North Initiative, UMass Amherst',
    period: 'July 2025 - Present',
    location: 'Amherst, MA',
    description: [
      'Conducting archival research on slavery in the U.S. North and Canada, transcribing handwritten 17th-19th century documents.',
      'Digitizing and inputting historical data into a public-facing database, ensuring accuracy, consistency, and metadata quality.',
      'Contributing to expanding public access to underrepresented histories as part of a Mellon Foundation-funded digital humanities project.',
    ],
    category: [ExperienceCategory.Research],
  },
  {
    role: 'Strategy & Financial Modeling Intern',
    company: 'Re-Volt Charging Inc.',
    period: 'March 2025 - May 2025',
    location: 'Waltham, MA',
    description: [
      'Analyzed infrastructure utilization across Level 2 & DCFC chargers, synthesizing KPIs (sessions/day, kWh/session) to guide ROI forecasting.',
      'Modeled installation costs, financial incentives, and pricing strategies to support capital planning and EV charger deployment strategy.',
      'Delivered Excel-based forecasts and stakeholder reports, applying principles from Financial Modeling coursework (FIN 301).',
    ],
    category: [ExperienceCategory.Finance, ExperienceCategory.CleanEnergy],
  },
  {
    role: 'Finance, Investment Banking, and Wealth Management Internships',
    company: 'JS Group',
    period: 'May 2023 - January 2025',
    location: 'Karachi, Pakistan',
    description: [
      'Conducted equity research and supported deal execution for portfolios exceeding PKR 144 billion.',
      'Performed risk assessments on over PKR 107 billion in mutual and pension funds to inform strategic asset management.',
      'Advised on ultra-HNW client portfolios at JS Bank Ltd., achieving a 100% return rate for new clients through tailored wealth management plans.',
    ],
    category: [ExperienceCategory.Finance],
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

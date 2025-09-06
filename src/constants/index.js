import {
  c,
  python,
  java,
  canva,
  figma,
  abode,
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Figma", icon: figma },
  { title: "Canva", icon: canva },
  { title: "Adobe", icon: abode },
  { title: "C", icon: c },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
 

];

export const technologies = [
   { name: "Figma", icon: figma },
  { name: "Canva", icon: canva },
  { name: "Abode", icon: abode },
  { name: "HTML 5", icon: html },
  {name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },

];

export const experiences = [
  {
    title: "AWS DeveOps Intern",
    company_name: "APSSDC | AWS Academy | AP Naipunyam",
    icon: eduskill,
    iconBg: "#161329",
    date: "May 2025 - July  2025",
    points: [
      "Built and deployed a Smart Movie Ticket Platform on AWS using a scalable, cloud-based architecture.",
     "Utilized AWS services such as EC2, S3, IAM, and VPC to create a secure and efficient infrastructure.",
     "Developed automation scripts and applied DevOps practices like CI/CD pipelines, Git version control, and containerization.",
     "Improved platform performance and cost-effectiveness through cloud optimization techniques.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  

  {
    title: "Cyber Security Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | APSSDC",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2024 - Aug 2024",
    points: [
      "Developed and implemented educational programs to improve digital literacy in underserved communities.",
     "Conducted research on educational trends and technology integration for program planning.",
     "Maintained reports and dashboards to analyze project outcomes and impact.",
     "Collaborated with teams to design and deliver workshops and training sessions.",
     "Assisted in outreach efforts and managed campaigns to increase community engagement.",
     "Supported administrative tasks including scheduling, communication, and data entry",
    ],
  },
];

export const projects = [
  {
    name: "Helpr – Home Services Platform (Flagship Project, Ongoing)",
    description:
      "Led the complete design process in Figma, including user research, wireframes, prototypes, and high-fidelity UI. " +
      "Built and tested responsive pages using HTML/CSS and deployed early versions on Wix. " +
      "Integrated user-centered design principles to ensure a seamless, mobile-friendly experience.",
    tags: [
      { name: "Figma", color: "blue-text-gradient" },
      { name: "Softr", color: "green-text-gradient" },
      { name: "Airtable", color: "pink-text-gradient" },
      { name: "Home Services", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://www.helprservices.online",
  },
  {
    name: " Designed Go Vega Webiste",
    description:
      "Designed a modern, responsive, and user-friendly web interface for Govega, focusing on clean aesthetics and seamless navigation.",
    tags: [
      { name: "UX/UI", color: "blue-text-gradient" },
      { name: "Product Design ", color: "green-text-gradient" },
      { name: "Web Design", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://www.figma.com/proto/3Lgj0HORMTlsbyFMtoxzOG/sf?page-id=205%3A12559&node-id=911-25957&viewport=-21%2C318%2C0.06&t=PW6gx8wQpDxKwCIj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=926%3A42570&show-proto-sidebar=1",
  },
  {
    name: "Shoporia",
    description:
        "Designed a modern, conversion-focused landing page for Shoporia, a smart & reliable digital supply chain platform.",
       tags: [
      { name: "WebDesign", color: "blue-text-gradient" },
      { name: "UIUX", color: "green-text-gradient" },
      { name: "Landing Page", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
     "https://www.figma.com/proto/3Lgj0HORMTlsbyFMtoxzOG/sf?page-id=205%3A12559&node-id=913-13333&viewport=-21%2C318%2C0.06&t=PW6gx8wQpDxKwCIj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=926%3A42570 ",
 },
  {
    name: "Desinged An Mobile App UI/UX",
    description:
      "Designed a seamless and engaging mobile shopping app for a large retail store",
    tags: [
      { name: "AppDesign", color: "blue-text-gradient" },
      { name: "MobileUI", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://www.figma.com/proto/3Lgj0HORMTlsbyFMtoxzOG/sf?page-id=205%3A12559&node-id=911-10631&viewport=-21%2C318%2C0.06&t=PW6gx8wQpDxKwCIj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=926%3A42570",
  },
 

];

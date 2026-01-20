import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a software engineer who enjoys building reliable backend systems and leading teams to deliver real-world solutions. I have worked on projects such as a Parliament Election Results Feeding System, Hotel Management System, and an Automated Exam Scheduler, using Java, Spring Boot, and modern technologies. I am passionate about collaboration, mentoring, and creating software that is secure, scalable, and genuinely useful.`;

export const ABOUT_TEXT = `I am a software engineer with a strong interest in backend development and team leadership. 
I have experience working with Java and Spring Boot to design and build scalable systems, and 
I have contributed to projects including a Parliament Election Results Feeding System, Hotel Management System, Task Management, and an Automated Exam Scheduler. I enjoy working in agile teams, reviewing code, mentoring others, and continuously learning new technologies. My goal is to build secure, well-structured software that solves real problems and adds real value.
`;

export const EXPERIENCES = [
  // {
  //   year: "2022 - 2025",
  //   role: "Undergraduate Student",
  //   company: "Eastern University",
  //   description: "Undergraduate student of Bachelor Of Computer Science at Trincomalee Campus Eastern University of Sri Lanka",
  //   technologies: ["Cumulative 3.01"],
  // },
  {
    year: "July 2025 – January 2026",
    role: "Intern Software Engineer",
    company: "Samuel Gnanam It Center",
    description: `Acted as Backend Team Lead, overseeing development and collaboration.\n\nConducted peer code reviews, managed merges, and mentored a colleague.\n\nDeveloped large-scale systems using Spring Boot.\n\nHandled deployment, maintenance, and release management.\n\nOrganized and facilitated daily standup meetings for Agile workflows.`,
    technologies: ["Spring Boot", "Agile", "Leadership", "Deployment", "Git", "GitHub"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Vite"],
    githubLink: "https://github.com/hishanthp1231/My_Portfolio.git",
  },
  {
    title: "Automatic Exam Scheduling System",
    image: project4,
    description:
      "Developed a web-based automatic exam scheduling system using React, Node.js, and MongoDB, powered by a Genetic Algorithm to generate conflict-free exam timetables. The system automates exam allocation, prevents student clashes, optimizes venue usage, and simplifies scheduling through an intuitive admin interface.",
    technologies: ["React", "Node.js", "MongoDB", "Genetic Algorithm"],
    githubLink: "https://github.com/hishanthp1231/Automatic-Exam-Timetable-Generator-Frontend.git",
  },
  {
    title: "Parliament Election Results Feeding System",
    image: project2,
    description:
      "A robust system developed for managing and feeding real-time parliament election results. Built with Java and Spring Boot, the system ensures secure, efficient, and accurate data entry and aggregation for election monitoring and reporting.",
    technologies: ["Java", "Agile", "MySQL"],
    githubLink: "https://github.com/hishanthp1231/Election_Backend.git",
  },
  {
    title: "Hotel Management System",
    image: project3,
    description:
      "A comprehensive system developed for managing hotels, rooms, bookings, and customer information. Built with Java and Spring Boot, the system ensures efficient reservation management, secure data handling, and smooth operations for hotel staff and customers.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    githubLink: "https://github.com/SGIC-BATCH-15/HMS-Back-End-Final.git",
  }

];

export const CONTACT = {
  address: "",
  phoneNo: "+94 71 5238154",
  email: "hishanthp01@gmail.com",
};

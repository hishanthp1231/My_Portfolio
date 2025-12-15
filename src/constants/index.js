import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `I am a results-oriented software engineer specializing in backend development, leadership, and machine learning. 
With hands-on experience as a backend team lead and contributor to projects like a Parliament Election Results Feeding System, Hotel Management System, and
Automatic Exam scheduler, I excel at building secure, scalable, and innovative solutions using Spring Boot, Java, and modern technologies. 
My passion is driving impactful change through collaboration, mentoring, and delivering high-quality software that solves real-world problems.`;

export const ABOUT_TEXT = `I am a results-driven software engineer with a strong background in backend development and leadership. My experience spans leading backend teams, architecting and deploying large-scale systems with Spring Boot and Java, and implementing machine learning solutions. I have contributed to impactful projects such as a Parliament Election Results Feeding System, a Defect Tracker, and a Vehicle Maintenance System, each emphasizing security, scalability, and real-world value. As a mentor and collaborator, I thrive in agile teams, conduct code reviews, and ensure high-quality releases. My passion lies in building robust, secure, and innovative solutions that make a difference.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2025",
    role: "Undergraduate Student",
    company: "Eastern University",
    description: "Undergraduate student of Bachelor Of Compuetr Science at Trincomalee Capus Eastern University of Sri Lanka",
    technologies: ["Cumulative 3.01"],
  },
  {
    year: "July 2025 – Present",
    role: "Intern Software Engineer",
    company: "Samuel Gnanam It Center",
    description: `Acted as Backend Team Lead, overseeing development and collaboration.\n\nConducted peer code reviews, managed merges, and mentored a colleague.\n\nDeveloped large-scale systems using Spring Boot.\n\nHandled deployment, maintenance, and release management.\n\nOrganized and facilitated daily standup meetings for Agile workflows.`,
    technologies: ["Spring Boot", "Agile", "Leadership", "Deployment"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Parliament Election Results Feeding System",
    image: project2,
    description:
      "A robust system developed for managing and feeding real-time parliament election results. Built with Java and Spring Boot, the system ensures secure, efficient, and accurate data entry and aggregation for election monitoring and reporting.",
    technologies: ["Java", "Spring Boot", "Agile", "MySQL"],
  },
  {
    title: "Hotel Management System",
    image: project3,
    description:
      "A comprehensive system developed for managing hotels, rooms, bookings, and customer information. Built with Java and Spring Boot, the system ensures efficient reservation management, secure data handling, and smooth operations for hotel staff and customers.",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
  }

];

export const CONTACT = {
  address: "No 564/E, Arasady Amman Kovil Road, Pandiruppu-02C, Kalmunai, Sri Lanka",
  phoneNo: "+94 71 5238154",
  email: "hishanthp01@gmail.com",
};

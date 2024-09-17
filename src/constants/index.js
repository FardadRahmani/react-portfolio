import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import python from "../assets/certificates/python.jpg";
import cpp from "../assets/certificates/Cpp.jpg";
import html from "../assets/certificates/html.jpg";
import android from "../assets/certificates/android.jpg";
import employer from "../assets/certificates/employer.jpg";
import networks from "../assets/certificates/networks.jpg";

export const HERO_CONTENT = `I am a passionate Software developer with a knack for crafting robust and scalable applications. With 5 years of hands-on experience in the IT-Section, I have honed my skills and Understanding in the workings of modern enterprises. In the course of my retraining I am getting gradually more acquainted with different Programming Languages such as Python, C++ and Kotlin, as well as recent acquaintance into webdevelopment with React, Next.js as well as back-end technologies like Node.js, PostgreSQL. My goal is to leverage my expertise in Software Development, especially in relation to A.I.and machine Learning to create innovative solutions that help humanity as a whole and so be a part of this great new hype that will in my opinion conquer every bit of our digital and normal life.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software developer with a passion for creating efficient and user-friendly applications. I have worked with a variety of technologies, including C++, C, Kotlin, Java and PostgreSQL, however what intrigued me the most and left me craving more was definitely PYTHON. My journey into Python-development began with a deep curiosity for how A.I. works, and even though I didnt take python serious at first as a programming Language, from the moment I started learning it my initial curiosity has evolved into a deep Connectedness where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and deeply enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy stillness inducing activities such as playing music, hiking and Yoga.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Developer Trainee",
    company: "Macromedia Academy",
    description: `Learning Software development especially OOP.`,
    technologies: ["C++", "Java", "Python", "PostgreSQL"],
  },
  {
    year: "2022 - 2023",
    role: "IT-Helpdesk",
    company: "Staatliche Lotto-GmbH BW",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["incident management", "Software distribution", "ELO", "site management"],
  },
  {
    year: "2021 - 2022",
    role: "Senior Technician",
    company: "Computacenter AG",
    description: `Support of well-known end customers on-site.Maintenance of customer systems according to IMAC.`,
    technologies: ["Software distribution", "tickets", "", ""],
  },
  {
    year: "2020 - 2021",
    role: "Imaging Process Specialist",
    company: "Examion GmbH",
    description: `Advanced imaging specialist training CT, MRI, X-Ray`,
    technologies: ["XRAY imaging systems", "CT", "MRI", "X-Ray"],
  },
];

export const PROJECTS = [
  {
    title: "Weather App",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Kotlin", "Jetpack Compose", "Co-Routines", "Asynchronous Programming", "Composables"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "PyQt Application",
    image: project4,
    description: "Desktop application developed using PyQt for GUI applications.",
    technologies: ["Python", "PyQt"],
  },
];

export const CERTIFICATES = [
  {
    title: "Python",
    image: python,
    description:
      "Advanced Python programming with focus on data analysis, machine learning, and AI applications in healthcare.",
    technologies: ["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "OpenCV", "PyTorch"],
  },
  {
    title: "C++",
    image: cpp,
    description:
      "Developed high-performance algorithms and data structures, with applications in University of Pforzheim and Macromedia Academy.",
    technologies: ["OOP", "Pointer", "Arithmetics", "Storage optimization", "lifeCycles"],
  },
  {
    title: "Web-Development",
    image: html,
    description:
      "Created responsive web applications for visualizing medical data and AI model outputs.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "D3.js", "Flask"],
  },
  {
    title: "Android-App Development",
    image: android,
    description: "Developed mobile health applications for patient monitoring and data collection.",
    technologies: ["Java", "Kotlin", "Android SDK", "Firebase", "HealthKit"],
  },
  {
    title: "IT Courses - LinkedIn Learning",
    image: networks,
    description:
      "Completed courses in AI ethics, medical data privacy, and cutting-edge machine learning techniques.",
    technologies: ["Networks", "GDPR", "HIPAA", "Deep Learning", "Natural Language Processing"],
  },
  {
    title: "Employment References",
    image: employer,
    description: "Positive testimonials highlighting problem-solving skills and ability to work in interdisciplinary teams.",
    technologies: ["Team Collaboration", "Agile Methodologies", "Cross-functional Communication"],
  },
];


export const CONTACT = {
  address: "Bad Cannstatt, Stuttgart ",
  phoneNo: "+49-See CV ",
  email: "rahmanifardad@yahoo.de",
};

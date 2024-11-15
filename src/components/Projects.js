// Projects.js
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import reactIcon from '../assets/images/icons/reacticon.svg'
import nodeIcon from '../assets/images/icons/nodeicon.png'
import supabaseIcon from '../assets/images/icons/supabase.png'
import tailwindIcon from '../assets/images/icons/tailwindcss.png'
import javaIcon from '../assets/images/icons/java.png'
import intelliJIcon from '../assets/images/icons/intellij.png'
import pythonIcon from '../assets/images/icons/python.png'
import pygameIcon from '../assets/images/icons/pygame.png'
import fileIcon from '../assets/images/icons/folder.png'
import jsIcon from '../assets/images/icons/js.png'
import htmlIcon from '../assets/images/icons/html.png'
import cssIcon from '../assets/images/icons/css.png'
import cIcon from '../assets/images/icons/c-original.svg'
import flaskIcon from '../assets/images/icons/flask-original-wordmark.svg'
import dockerIcon from '../assets/images/icons/docker-original.svg'
import goIcon from '../assets/images/icons/go-original-wordmark.svg'
import postgresIcon from '../assets/images/icons/postgresql-original.svg'
import viteIcon from '../assets/images/icons/vitejs-original.svg'
import sqliteIcon from '../assets/images/icons/sqlite-original.svg'
import paypalIcon from '../assets/images/icons/PayPal.png'
import mavenIcon from '../assets/images/icons/maven-original.svg'
import springIcon from '../assets/images/icons/spring-original.svg'
import npmIcon from '../assets/images/icons/npm-original-wordmark.svg'
import microblogDemo from '../assets/videos/microblogDemo.mp4'
import steamStatsDemo from '../assets/videos/steamStatsDemo.mp4'
import djangoIcon from '../assets/images/icons/django-plain.svg'
import rep4yVisual from '../assets/images/visuals/Rep4yVisual.png'
import pomoVisual from '../assets/images/visuals/pomodoro.png'
import wishrVisual from '../assets/images/visuals/Wishr.png'

const ProjectsSection = styled(motion.section)`
  padding: 100px 20px;
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


const ProjectContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
  overflow: hidden;
  position: relative;
`;

const TechLogoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

// Styled Component for the Project Card
const ProjectCard = styled(motion.div)`
  background: var(--white);
  color: var(--text-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
  
  // Scale down font sizes for smaller screens
  h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: var(--gray);
    text-align: justify;
    margin-bottom: 1rem;
    flex-grow: 1;
  }

  /* Tech logo container: Make it responsive by adjusting the spacing */
  ${TechLogoContainer} {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;  /* Center the logos on small screens */
  }

  /* Demo and Repo Links: Adjust for mobile-friendly layout */
  a {
    margin-right: 1rem;
    text-decoration: none;
    color: #007bff;
    font-size: 0.9rem;
  }

  /* Images Section: Stack images vertically on smaller screens */
  div[style*="marginTop: '1rem'"] {
    display: flex;
    flex-direction: column; /* Stack images vertically on smaller screens */
    gap: 1rem;
  }

  @media (max-width: 768px) {
    /* For screens smaller than 768px (e.g., tablets, small laptops) */
    padding: 15px;          /* Reduce padding for small screens */
    min-height: 350px;      /* Slightly reduce the height */
    h3 {
      font-size: 1.25rem;  /* Reduce font size for small screens */
    }
    p {
      font-size: 0.9rem;   /* Reduce font size for small screens */
    }
    a {
      font-size: 0.85rem;  /* Smaller font size for links */
    }
  }

  @media (max-width: 480px) {
    /* For screens smaller than 480px (e.g., mobile devices) */
    padding: 10px;          /* Reduce padding more for mobile */
    min-height: 300px;      /* Ensure smaller height on mobile */
    h3 {
      font-size: 1.1rem;  /* Further reduce the font size for titles */
    }
    p {
      font-size: 0.85rem; /* Further reduce the font size for description */
    }
    div[style*="marginTop: '1rem'"] {
      display: block; /* Stack images in a column on mobile */
    }
    a {
      font-size: 0.8rem;   /* Adjust link font size on mobile */
      margin-right: 0;     /* Remove right margin for a cleaner layout */
    }
  }
`;


const NavButton = styled.button`
  position: absolute;
  top: 90%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--secondary-color);
  z-index: 1;

  &:hover {
    color: var(--secondary-color);
  }
`;

const LeftButton = styled(NavButton)`
  left: 0px;
`;

const RightButton = styled(NavButton)`
  right: 0px;
`;

const projects = [
  {
    title: "Capstone Project: ReP4y *",
    description: "Rep4y is a peer-to-peer payment platform designed to simplify shared expenses by automating recurring payments between users. Whether it’s splitting bills, subscriptions, or shared services, Rep4y makes managing monthly payments seamless. \n Built as a robust full-stack application with Supabase, React, Node.js, Shadcn, and TailwindCSS. Rep4y provides a secure, user-friendly experience for all types of recurring payments.",
    technologies: [reactIcon, supabaseIcon, nodeIcon, tailwindIcon, paypalIcon],
    demoLink: "https://rep4y.com/",
    repoLink: "",
    images: [
      rep4yVisual
    ],
    isPrivate: "* This project's repository is privately owned/maintained"
  },
  {
    title: "AI Agent: Tic Tac Toe",
    description: "This project is an AI-driven Tic-Tac-Toe bot using the Minimax algorithm to play optimally and ensure it cannot be defeated with perfect play. Core functions handle game mechanics: determining which player’s turn it is, identifying possible moves, returning resulting board states, and assessing game outcomes. The bot calculates optimal moves based on the utility of board states, evaluating potential wins, losses, or ties. Using efficient deep copies to explore moves, it ensures no modifications to original boards during gameplay. The result is a robust AI capable of playing flawlessly and offering a challenging opponent.",
    technologies: [pythonIcon, pygameIcon],
    demoLink: "https://eastona01.github.io/TicTacToe-With-PyGame/",
    repoLink: "https://github.com/EastonA01/TicTacToe-With-PyGame",
    images: [
    ]
  },
  {
    title: "File Explorer/File Manager",
    description: "This Java Swing-based file manager provides a user-friendly interface for navigating and managing directories. Users can view file details, copy, move, and delete files, as well as create and delete directories. A search feature allows file lookup by name or extension. The application is designed with robust exception handling, logging, and organized modular code to ensure a smooth, reliable experience.",
    technologies: [javaIcon, intelliJIcon, fileIcon, mavenIcon],
    demoLink: "",
    repoLink: "https://github.com/EastonA01/CTAC-IO-Project",
    images: [
    ]
  },
  {
    title: "Twitter/X Clone - Inkling",
    description: "Inkling is a collaborative project that replicates essential Twitter/X features, allowing users to create, view, update, and delete posts in a responsive, mobile-friendly web app. Developed with HTML, CSS, and JavaScript, Inkling offers a clean and intuitive interface where users can publish posts with character limits, add tags, and view posts in a dynamic feed. The app includes search functionality for finding posts by keywords, and data persistence using local storage, ensuring user data is saved between sessions. Comprehensive error handling, input validation, and informative messages enhance the user experience, while responsive design principles ensure compatibility across devices. Clear documentation and modular code further support maintainability and scalability",
    technologies: [jsIcon, htmlIcon, cssIcon],
    demoLink: "https://eastona01.github.io/CTAC-FS102-Agile-Project/",
    repoLink: "https://github.com/EastonA01/CTAC-FS102-Agile-Project",
    images: [
    ]
  },
  {
    title: "Microblog",
    description: "A microblog application that was built reference to many modern blogging applications, with Twitter being the closest popular example to the project. With a fully fleshed out login form, email functionality, landing page, explore page, and users page. Email functionality is also available. Inspiration from miguelgrinberg.com",
    technologies: [pythonIcon, flaskIcon, sqliteIcon, htmlIcon],
    demoLink: microblogDemo,
    repoLink: "https://github.com/EastonA01/MicroBlog-With-Flask-and-Python",
    images: [
    ]
  },
  {
    title: "Wishr",
    description: "A place where users can create wish lists and invite others to view, comment, and make marks on the list. Viewers are able to mark themselves as 'assigned' to a gift as well as if they have purchased the item. Viewers will also have a place to chat which can help them connect and communicate on gift purchasing plans. Creators will not be able to see any of the markings or discussion and if they are to edit the list, then by default the viewers will be notified.",
    technologies: [goIcon, dockerIcon, postgresIcon, reactIcon, viteIcon, jsIcon, htmlIcon, cssIcon, npmIcon],
    demoLink: "",
    repoLink: "https://github.com/tcyr123/Wishr",
    images: [
      wishrVisual
    ]
  },
  {
    title: "Forensic Image Recovery *",
    description: "This JPEG recovery tool, written in C, restores deleted images from memory cards by identifying JPEG file signatures within raw data. Using efficient 512-byte block reading, the program scans for JPEG headers, ensuring accurate extraction of image data with file integrity. It employs forensic techniques to analyze slack space and align data blocks, maximizing the recovery of complete JPEG files.",
    technologies: [cIcon],
    demoLink: "",
    repoLink: "",
    images: [
    ],
    isPrivate: "* This project is privately owned"
  },
  {
    title: "Image Filtering Program *",
    description: "This C-based image filtering program applies a series of visual effects to BMP images, including grayscale, reflection, blur, and edge detection. It manipulates RGB values at the pixel level using 2D arrays, enabling precise control over image transformations. For edge detection, the program uses Sobel operators with mathematical kernels to analyze boundaries and enhance image definition.",
    technologies: [cIcon],
    demoLink: "",
    repoLink: "",
    images: [
    ],
    isPrivate: "* This project is privately owned"
  },
  {
    title: "Spring And Spring Security: Securing APIs",
    description: "This project secures APIs in a Spring Boot application using authentication, authorization, and role-based access control. After initializing with Spring Security and configuring project packages, a SecurityConfig class manages basic authentication, while OAuth2 and JWT integration enable token-based security with endpoints for registration, login, and token issuance. Roles like ADMIN and USER enforce role-based access control, using @PreAuthorize and @Secured for fine-grained permissions. Comprehensive testing with Postman verifies secure access to endpoints, ensuring robust protection for application APIs.",
    technologies: [springIcon, javaIcon, mavenIcon, intelliJIcon],
    demoLink: "",
    repoLink: "https://github.com/EastonA01/CTAC-MiniSpring-SecuringAPIs2",
    images: [
    ]
  },
  {
    title: "Credit/Banking Validation *",
    description: "This credit card validator, implemented first in C for efficiency and then in Python for versatility, authenticates card numbers using Luhn's algorithm. It efficiently processes large numeric inputs, accommodating 15- and 16-digit card numbers, and categorizes card types (Visa, MasterCard, AMEX) by analyzing card length and prefix rules. The tool ensures accurate validation across various card providers while demonstrating robust handling of high-digit inputs.",
    technologies: [cIcon, pythonIcon],
    demoLink: "",
    repoLink: "",
    images: [
    ],
    isPrivate: "* This project is privately owned"
  },
  {
    title: "Restaurant Management System",
    description: "This Java-based application, developed with a Swing GUI, serves as a foundational component for a restaurant POS system aimed at assisting servers and management. It features comprehensive order, table, inventory, and menu management, along with daily revenue report generation. Data is stored in CSV files with compatibility for SQL databases, enabling flexible data handling and integration with larger systems. The user-friendly interface and robust functionality make it an efficient tool for restaurant operations.",
    technologies: [javaIcon, intelliJIcon, mavenIcon],
    demoLink: "",
    repoLink: "https://github.com/EastonA01/CTAC-FS103-Agile-Project",
    images: [
    ]
  },
  {
    title: "Personal Project: SteamStats",
    description: "The SteamStats Project in it's original form is meant to display the data of Steam user's given their SteamID, alongside some additional data from their friends, with the ability to jump between both your SteamStats and your friends' statistics. With the primary asset being the ability to compare your statistics with your friends'.",
    technologies: [reactIcon, jsIcon, pythonIcon, djangoIcon, sqliteIcon, cssIcon, htmlIcon],
    demoLink: steamStatsDemo,
    repoLink: "https://github.com/EastonA01/SteamStats",
    images: [
    ]
  },
  {
    title: "Pomodoro Timer",
    description: " A pomodoro timer put together in the short span of an afternoon in conjunction with the Advent of JavaScript program, users are able to adjust the minutes and seconds and are greeted with a soundbyte of Back in Black when the timer reaches 0.",
    technologies: [jsIcon, cssIcon, htmlIcon  ],
    demoLink: "https://eastona01.github.io/PomodoroTimer/",
    repoLink: "https://github.com/EastonA01/PomodoroTimer",
    images: [
      pomoVisual
    ]
  },
  {
    title: "Harvard CS50 Capstone: Listify *",
    description: "This project is a web app that was designed for the purpose of keeping track of lists made by multiple users at once, all the while giving said users the ability to share their lists with others, and being able to modify the contents of the list without having needed to send an updated list to whomever they desire, this app is particularly useful for lists that are sent out as a checklist such as a Christmas/Birthday list but is shines as a registry for an assortment of occasions such as a wedding or baby shower.",
    technologies: [pythonIcon, flaskIcon, sqliteIcon],
    demoLink: "",
    repoLink: "",
    images: [
    ],
    isPrivate: "* This project is privately owned"
  },
  {
    title: "Django Display Showcase",
    description: "A showcase of a multitude of skills learned throughout my career as a Python developer, with features being added constantly throughout; For a list of future additions see the projects tab.",
    technologies: [djangoIcon, pythonIcon, sqliteIcon, htmlIcon, cssIcon],
    demoLink: "",
    repoLink: "https://github.com/EastonA01/Django-Large-Display-Showcase",
    images: [
    ]
  },
  // Commented out format for additional project cards VVVVVVVVVV
  // {
  //   title: "TODO",
  //   description: "",
  //   technologies: [],
  //   demoLink: "",
  //   repoLink: "",
  //   images: [
  //   ]
  // },
  // Add more projects as needed
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle going to the next project
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to handle going to the previous project
  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <ProjectsSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="projects"
    >
      <h2>Projects</h2>
      <ProjectContainer>
        {/* Project Navigation Buttons */}
        <LeftButton onClick={prevProject}>{"<"}</LeftButton>
        <RightButton onClick={nextProject}>{">"}</RightButton>
        
        {/* Current Project Card */}
        <ProjectCard
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].description}</p>

          {/* Technology Logos */}
          <TechLogoContainer>
            {projects[currentIndex].technologies.map((TechLogo, logoIndex) => (
              <div key={logoIndex} style={{ width: "24px", height: "24px" }}>
                <img src={TechLogo} alt='Tech Logo' style={{ width: "24px", height: "24px" }} />
              </div>
            ))}
          </TechLogoContainer>

          {/* Demo and Repo Links */}
          <div style={{ marginTop: "1rem" }}>
            {projects[currentIndex].demoLink && (
              <a
                href={projects[currentIndex].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "1rem", textDecoration: "none", color: "#007bff" }}
              >
                View Demo
              </a>
            )}
            {projects[currentIndex].repoLink && (
              <a
                href={projects[currentIndex].repoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#007bff" }}
              >
                View Repo
              </a>
            )}
          </div>

          {/* Images Section */}
          {projects[currentIndex].images && (
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
              {projects[currentIndex].images.map((image, imageIndex) => (
                <div key={imageIndex} style={{ width: "200px", height: "auto" }}>
                  <img
                    src={image}
                    alt={`Project ${currentIndex + 1} ${imageIndex + 1}`}
                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Shows if Project is private or not */}
          <p>{projects[currentIndex].isPrivate}</p>
        </ProjectCard>
      </ProjectContainer>
    </ProjectsSection>
  );
};

export default Projects;
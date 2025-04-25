import React from "react";
import styled from "styled-components";
import ioVisual from '../assets/images/visuals/IOProjectVisual2.png'
import rep4yVisual from '../assets/images/visuals/Rep4yVisual.png'
import kiloVisual from "../assets/images/visuals/kilovisual.png"

const ProjectsSection = styled.section`
  padding: 50px 20px;
  color: #fafafa;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  text-align: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 5px;
    background-color: var(--primary-color);
    border-radius: 2px;
  }
`;

const ProjectRow = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.index % 2 === 0 ? "row" : "row-reverse")};
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const ProjectImageContainer = styled.div`
  flex: 1;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 30em;
  width: 100%; /* Make it responsive */
  max-width: 40em; /* Limit the maximum width */
  border-radius: 10px;
  margin: 0 20px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    height: 20em; /* Adjust height for smaller screens */
    max-width: 90%; /* Allow more width usage on smaller screens */
    min-height: 20em; /* Added to allow images to properly render in mobile*/
  }
`

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.index % 2 === 0 ? "flex-start" : "flex-end")};
  text-align: ${(props) => (props.index % 2 === 0 ? "left" : "right")};
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 20px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.2s;
  }

`;

const Projects2 = () => {
  const projectData = [
    {
      title: "ReP4y",
      description: "A cutting-edge web application that is a peer-to-peer payment platform designed to simplify shared expenses by automating recurring payments between users. Whether it’s splitting bills, subscriptions, or shared services, Rep4y makes managing monthly payments seamless.",
      image: rep4yVisual,
      demoLink: "https://rep4y.com/",
      repoLink: "",
    },
    {
      title: "Custom File Manager",
      description: "This Java Swing-based file manager provides a user-friendly interface for navigating and managing directories. Users can view file details, copy, move, and delete files, as well as create and delete directories. A search feature allows file lookup by name or extension. The application is designed with robust exception handling, logging, and organized modular code to ensure a smooth, reliable experience.",
      image: ioVisual,
      demoLink: "",
      repoLink: "https://github.com/EastonA01/CTAC-IO-Project",
    },
    {
      title: "Rich Text Editor",
      description: "This is a minimal yet powerful text editor built in C, inspired by antirez's kilo, with some modifications. It is a single-file program (~1000 lines of C) with minimal dependencies, featuring essential text-editing capabilities, syntax highlighting, and a search function.",
      image: kiloVisual,
      demoLink: "",
      repoLink: "https://github.com/EastonA01/text-editor-in-c",
    },
    // Add more projects as needed
  ];

  return (
    <ProjectsSection id="projects">
      <SectionHeading>Projects</SectionHeading>
      {projectData.map((project, index) => (
        <ProjectRow key={index} index={index}>
          <ProjectImageContainer image={project.image} />
          <ProjectContent index={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              {project.demoLink && (
                <button>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  App Demo
                </a>
                </button>
              )}
              {project.repoLink && (
                <button>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  Code Repository
                </a>
                </button>
              )}
            </ProjectLinks>
          </ProjectContent>
        </ProjectRow>
      ))}
    </ProjectsSection>
  );
};

export default Projects2;
import React from "react";
import styled from "styled-components";

const ShowcaseContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid var(--gray);
    border-radius: 10px;
    color: var(--text-color);
    backdrop-filter: blur(5px);
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Project = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  //text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

const Background = styled.div`
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  margin: 5px 0;
    color: var(--text-color);
`;

const Technologies = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 0.9em;
`;

const Technology = styled.li`
  background: rgba(15, 15, 15);
  padding: 5px 10px;
  border-radius: 5px;
`;

const Showcase = () => {
    const projects = [
        {
            title: "Rep4y",
            description: "A cutting-edge web application that is a peer-to-peer payment platform designed to simplify shared expenses by automating recurring payments between users. Whether it’s splitting bills, subscriptions, or shared services, Rep4y makes managing monthly payments seamless.  ",
            technologies: ["React", "Node.js", "Supabase", "TailwindCSS", "PayPalAPI", "OAuth2"],
        },
        {
            title: "Wishr",
            description: "A place where users can create wish lists and invite others to view, comment, and make marks on the list. Viewers are able to mark themselves as 'assigned' to a gift as well as if they have purchased the item. Viewers will also have a place to chat which can help them connect and communicate on gift purchasing plans. Creators will not be able to see any of the markings or discussion and if they are to edit the list, then by default the viewers will be notified.",
            technologies: ["Go/GoLang", "Docker", "PostgreSQL", "React", "Vite", "JavaScript", "NPM", "HTML/CSS"],
        },
        {
            title: "File Explorer/File Manager",
            description: "This Java Swing-based file manager provides a user-friendly interface for navigating and managing directories. Users can view file details, copy, move, and delete files, as well as create and delete directories. A search feature allows file lookup by name or extension. The application is designed with robust exception handling, logging, and organized modular code to ensure a smooth, reliable experience.",
            technologies: ["Java", "Swing", "Apache Maven", "IntelliJ"],
        },
    ];

    return (
        <ShowcaseContainer>
            <h1>Project Showcase</h1>
            <ProjectContainer>
                {projects.map((project, index) => (
                    <Project key={index}>
                        <Background>
                            <Title>{project.title}</Title>
                            <Description>{project.description}</Description>
                            <Technologies>
                                {project.technologies.map((tech, idx) => (
                                    <Technology key={idx}>{tech}</Technology>
                                ))}
                            </Technologies>
                        </Background>
                    </Project>
                ))}
            </ProjectContainer>
        </ShowcaseContainer>
    );
};

export default Showcase;

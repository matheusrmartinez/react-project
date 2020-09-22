import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import backgroundImage from "./assets/background.jpg";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento App",
    "Desenvolvimento Web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }
  return (
    <>
      <Header title="Projects">
        <img src={backgroundImage}></img>
        <ul>
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
        <button type="button" onClick={handleAddProject}>
          Adicionar projeto
        </button>
      </Header>
    </>
  );
}

export default App;

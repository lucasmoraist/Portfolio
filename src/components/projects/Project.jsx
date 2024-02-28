import React from "react";
import Card from "../card/Card";
import Projetos from "../../mocks/Projetos";
import ProjectStyled from "./ProjectStyled";

const Project = () => {
    return <ProjectStyled id="projects">
        <h2 id="title">Projects</h2>
        <div id="card-grid">
            {Projetos.map((projeto) => {
                return <Card key={projeto.id} projeto={projeto} />;
            })}
        </div>
    </ProjectStyled>
}

export default Project;
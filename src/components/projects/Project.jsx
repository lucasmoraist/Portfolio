import React from "react";
import Card from "../card/Card";
import projetos from "../../mocks/Projetos";

const Project = () => {
    return <div>
        {projetos.forEach((projeto) => {
            console.log(projeto);
        })}
    </div>
}

export default Project;
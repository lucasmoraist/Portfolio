import React from "react";
import { Educations } from "../../mocks/Education";
import { DivEducation } from "./EducationStyled";

const Education = () => {
  return (
    <DivEducation>
      <div className="education-container">
        <h2>Education</h2>
        {Educations.map((education) => {
          return (
            <div className="education-wrapper">
              <img src={education.logo} alt="Logo da instituição" />
              <div>
                <h3>{education.instituicao}</h3>
                <p>
                  {education.dtInicio} - {education.dtFinal}
                </p>
                <p>{education.curso}</p>
              </div>
            </div>
          );
        })}
      </div>
    </DivEducation>
  );
};

export default Education;

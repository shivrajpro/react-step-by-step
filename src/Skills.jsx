import React, { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  function handleSkills(evt) {
    if (evt.target.checked) {
      setSkills([...skills, evt.target.value]);
    } else {
      const filteredSkills = skills.filter(
        (skill) => skill !== evt.target.value
      );
      setSkills(filteredSkills);
    }
  }

  return (
    <div>
      <h1>Select Skills</h1>
      <input onChange={handleSkills} value="JS" type="checkbox" id="js" />
      <label htmlFor="js">JS</label>
      <input
        onChange={handleSkills}
        value="ReactJS"
        type="checkbox"
        id="react"
      />
      <label htmlFor="react">ReactJS</label>
      <input onChange={handleSkills} value="Java" type="checkbox" id="java" />
      <label htmlFor="java">Java</label>

      <h1>You selected below skills</h1>
      <p> {skills.toString()} </p>
    </div>
  );
};

export default Skills;

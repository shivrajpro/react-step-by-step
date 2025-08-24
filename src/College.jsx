import React from "react";
import Student from "./Student";

const College = ({ college }) => {
  return (
    <div style={{ width: "300px" }}>
      <h1>Name: {college.name} </h1>
      <ul>
        <li> City: {college.city} </li>
        <li> Website: {college.website} </li>
        <li>Students</li>
        <ul>
          {college.student.map((student, idx) => {
            return (
              <li key={idx}>
                <Student student={student} />
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

export default College;

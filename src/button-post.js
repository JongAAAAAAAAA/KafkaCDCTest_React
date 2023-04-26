import React, { useState } from "react";
import Axios from "axios";

function ButtonPost() {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [major, setMajor] = useState("");
  const [professor, setProfessor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("/register/source", {
      student_id: studentId,
      student_name: studentName,
      major,
      professor,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="studentId">Student ID : </label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="studentName">Student Name : </label>
        <input
          type="text"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="major">Major : </label>
        <input
          type="text"
          id="major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="professor">Professor : </label>
        <input
          type="text"
          id="professor"
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ButtonPost;

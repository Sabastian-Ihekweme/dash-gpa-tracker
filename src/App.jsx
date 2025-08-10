import React, {useState, useEffect, createContext} from 'react';

import OverallCummulativeGPA from './OverallCummulativeGPA.jsx';
import GPAScaleSettings from './GPAScaleSettings';
import SemesterOverview from './SemesterOverview';
import CourseOverview from './CourseOverview';
import './App.css'
import logo from "./assets/dash-logo.png";

function App() {

  // GPA Scale
  const [gpaScale, setGpaScale] = useState('4.0');

  // Semester object
  const semester = {
    id: crypto.randomUUID(),
    name: 'Semester',
    courseCount: 0,
    gpa: 0,
    courses: [],
    selected: true
  }

  // Course object
  const course = {
    id: crypto.randomUUID(),
    courseCode: 'XXX101',
    courseTitle: 0,
    grade: 'A'
  }

  // Array of semesters
  const [semesters, setSemesters] = useState([
    {
    id: crypto.randomUUID(),
    name: 'Semester',
    courseCount: 0,
    gpa: 0,
    courses: [course, course, course],
    selected: true
  }
  ]);

  // Semester select index
  const [callIndex, setCallIndex] = useState(semesters?.[0]?.id || null);

  return (
    <>
      <div className="dashboard">
      <div className="header">
        <img className="logo" src={logo} alt="dash-logo"/> <span className="title">DASH</span>
      </div>
      <OverallCummulativeGPA />
      <GPAScaleSettings gpaScale={gpaScale} setGpaScale={setGpaScale}/>
      <SemesterOverview semesters={semesters} setSemesters={setSemesters}
      semester={semester} course={course} callIndex={callIndex} setCallIndex={setCallIndex}/>
      <CourseOverview callIndex={callIndex} setCallIndex={setCallIndex} course={course}
      semesters={semesters} setSemesters={setSemesters}/>
      </div>

      <footer>
        2025 DASH. Created by Sabastian-Ihekweme. <a href="https://github.com/Sabastian-Ihekweme">My Github</a>
      </footer>
    </>
  )
}

export default App

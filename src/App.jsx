import React, {useState, useEffect, createContext} from 'react';

import OverallCummulativeGPA from './OverallCummulativeGPA.jsx';
import GPAScaleSettings from './GPAScaleSettings';
import SemesterOverview from './SemesterOverview';
import CourseOverview from './CourseOverview';
import './App.css'
import logo from "./assets/dash-logo.png";

function App() {

  // GPA Scale
  const [gpaScale, setGpaScale] = useState('5.0');

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
    courseTitle: null,
    courseCredits: 0,
    grade: 'A'
  }

  // Array of semesters
  const [semesters, setSemesters] = useState(() => {
    const saved = localStorage.getItem("semesters");
    return saved ? JSON.parse(saved) : []; // fallback to empty array
  });

  useEffect(() => {
  localStorage.setItem("semesters", JSON.stringify(semesters));
  }, [semesters]);


  // Semester select index
  const [callIndex, setCallIndex] = useState(semesters?.[0]?.id || null);

  // Semester GPAs
  const [courseCredits, setCourseCredits] = useState([]);
  const [gradePoints, setGradePoints] = useState([]);


      // gradepoint
    function calculateGradePoint(grade) {
        if (gpaScale == '5.0') {
            if (grade == 'A') {
                return 5
            } else if (grade == 'B') {
                return 4
            } else if (grade == 'C') {
                return 3
            } else if ( grade == 'D') {
                return 2
            } else if (grade == 'E') {
                return 1
            } else if (grade == 'F') {
                return 0
            }
        } else if (gpaScale == '4.0') {
            if (grade == 'A') {
                return 4
            } else if (grade == 'B') {
                return 3
            } else if (grade == 'C') {
                return 2
            } else if ( grade == 'D') {
                return 1
            } else if (grade == 'E' || grade == 'F') {
                return 0
        }
    }
    }


  //CGPA
  const [cgpa, setCgpa] = useState("0.00");
  const [cummCredits, setTotalCredits] = useState("0");

  useEffect(() => {
    if (!semesters || semesters.length === 0) {
      setCgpa("0.00");
      return;
    }

    let totalCredits = 0;
    let totalGradePoints = 0;

    semesters.forEach(semester => {
      semester.courses.forEach(course => {
        const credits = Number(course.courseCredits || 0);
        const gradePoint = calculateGradePoint(course.grade) || 0;
        
        totalCredits += credits;
        totalGradePoints += gradePoint * credits;
      });
    });

    const newCgpa = totalCredits > 0 
      ? (totalGradePoints / totalCredits).toFixed(2) 
      : "0.00";

    setTotalCredits(totalCredits);
    setCgpa(newCgpa);

  }, [semesters, gpaScale]);


  return (
    <>
      <div className="dashboard">
      <div className="header">
        <img className="logo" src={logo} alt="dash-logo"/> <span className="title">DASH</span>
      </div>
      <OverallCummulativeGPA 
      cgpa={cgpa}
      setCgpa={setCgpa}
      totalCredits={cummCredits}/>

      <GPAScaleSettings 
        gpaScale={gpaScale} 
        setGpaScale={setGpaScale}/>

      <SemesterOverview
        setCourseCredits={setCourseCredits}
        setGradePoints={setGradePoints}
        gpaScale={gpaScale}
        semesters={semesters} setSemesters={setSemesters}
        semester={semester} 
        course={course} 
        callIndex={callIndex} 
        setCallIndex={setCallIndex}/>

      <CourseOverview 
        callIndex={callIndex} 
        setCallIndex={setCallIndex} 
        course={course}
        semesters={semesters} 
        setSemesters={setSemesters}/>
      </div>

      <footer>
        2025 DASH. Created by Sabastian-Ihekweme. <a href="https://github.com/Sabastian-Ihekweme">My Github</a>
      </footer>
    </>
  )
}

export default App

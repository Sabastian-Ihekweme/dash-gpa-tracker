import React, {useState, useEffect} from 'react';

import OverallCummulativeGPA from './OverallCummulativeGPA.jsx';
import GPAScaleSettings from './GPAScaleSettings';
import SemesterOverview from './SemesterOverview';
import CourseOverview from './CourseOverview';
import './App.css'
import logo from "./assets/dash-logo.png";

function App() {

  // GPA Scale
  const [gpaScale, setGpaScale] = useState('4.0');

  useEffect(() => {
        console.log(gpaScale);
    }, gpaScale);


  return (
    <>
      <div className="dashboard">
      <div className="header">
        <img className="logo" src={logo} alt="dash-logo"/> <span className="title">DASH</span>
      </div>
      <OverallCummulativeGPA />
      <GPAScaleSettings gpaScale={gpaScale} setGpaScale={setGpaScale}/>
      <SemesterOverview />
      <CourseOverview />
      </div>

      <footer>
        2025 DASH. Created by Sabastian-Ihekweme. <a href="https://github.com/Sabastian-Ihekweme">My Github</a>
      </footer>
    </>
  )
}

export default App

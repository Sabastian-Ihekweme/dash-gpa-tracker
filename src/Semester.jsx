import React, {useState, useEffect} from 'react';

import deleteicon from "./assets/icons/delete-icon.png";
import './styles/SemesterOverview.css';

function Semester({semesters, setSemesters, semester, id, course, callIndex, 
    setCallIndex}) {


    // Delete Semester
    function deleteSemester(i) {
        const newArray = semesters.filter(semester => {
            return semester.id !== i;
        })
        setSemesters(newArray);
    }

    // Select semester
    function selectSemester() {
        // The selected of the object clicked should be set to true
        setCallIndex(id)
    }

    // Change semester name
    const handleChange = (event) => {
        const semesterName = event.target.value;
        console.log(semesterName);

        //get the current semester object
        let currentSemester = null;
        semesters.map(semester => {
            currentSemester = semester.id === callIndex ? semester : currentSemester;
        });
            currentSemester.name = semesterName;
            console.log(currentSemester);
            console.log(semesters);
        };


    return (
    <>
        <div className={callIndex == id ? "selected semester-box" : "semester-box"}
        onClick={selectSemester}>
            <div className="semester-description">

                <input onChange={handleChange}
                type="text" name="course-title" placeholder={`Semester`}/>
                <p className="course-count">5 courses</p>
                
            </div>

            <div className="semester-details">
            <div className="semester-gpa">
                GPA: 4.87
            </div>

            <button onClick={() => {deleteSemester(id)}} className="delete-button">
                <img className="delete-icon" src={deleteicon} ></img>
            </button>
            </div>
        </div>
    </>
    )
}

export default Semester;

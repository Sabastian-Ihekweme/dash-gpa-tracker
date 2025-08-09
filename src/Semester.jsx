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
        // The selected of every other object should be set to fale
    }



    return (
    <>
        <div className={callIndex == id ? "selected semester-box" : "semester-box"}
        onClick={selectSemester}>
            <div className="semester-description">
                <input type="text" name="course-title" placeholder="Fall 2023"/>
                <p className="course-count">5 courses</p>
            </div>

            <div className="semester-details">
            <div className="semester-gpa">
                GPA: 4.87
            </div>

            <button onClick={() => deleteSemester(id)} className="delete-button">
                <img className="delete-icon" src={deleteicon} ></img>
            </button>
            </div>
        </div>
    </>
    )
}

export default Semester;

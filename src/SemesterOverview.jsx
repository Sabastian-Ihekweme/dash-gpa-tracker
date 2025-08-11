import React, {useState, useEffect} from 'react';

import Semester from "./Semester";
import './styles/SemesterOverview.css';

function SemesterOverview({semesters, setSemesters, semester, course,
     callIndex, setCallIndex}) {


    // Add new semester
    function addSemester() {
        setSemesters(prev => {
            const currentSemesters = Array.isArray(prev) ? prev : [];
            return [semester, ...currentSemesters]}
        );
        setCallIndex(semesters?.[0]?.id);
    }


     // Safety check for semesters being an array
    const safeSemesters = Array.isArray(semesters) ? semesters : [];


    return (
    <>
        <div className="box3 container semester-summary">
            <h2>Semester Overview</h2>
            <button className="add-button" onClick={addSemester}>+ Add New Semester</button>

            <div className="semester-list">
                {  
                    safeSemesters?.map(semester => {
                        return <li key={semester.id}>{<Semester 
                            semesters={semesters} setSemesters={setSemesters}
                            semester={semester} id={semester.id} course={course}
                            callIndex={callIndex} setCallIndex={setCallIndex}/>}</li>
                    })
                }
            </div>

            <p>Click on a semester to view/add details</p>
        </div>
    </>
    )
}

export default SemesterOverview;

import React, {useState, useEffect} from 'react';

import Semester from "./Semester";
import './styles/SemesterOverview.css';

function SemesterOverview({semesters, setSemesters, semester, course}) {

    const [callIndex, setCallIndex] = useState(semesters[0].id);

    // Add new semester
    function addSemester() {
        setSemesters([semester, ...semesters]);
    }

    // Set the call index to the latest semester object
    useEffect(() => {
        setCallIndex(semesters[0].id);
    }, [semesters]);


    return (
    <>
        <div className="box3 container semester-summary">
            <h2>Semester Overview</h2>
            <button className="add-button" onClick={addSemester}>+ Add New Semester</button>

            <div className="semester-list">
                {
                    semesters.map(semester => {
                        return <li key={semester.id}>{<Semester 
                            semesters={semesters} setSemesters={setSemesters}
                            semester={semester} id={semester.id} course={course}
                            callIndex={callIndex} setCallIndex={setCallIndex}/>}</li>
                    })
                }
            </div>

            <p>Click on a semester to view details</p>
        </div>
    </>
    )
}

export default SemesterOverview;

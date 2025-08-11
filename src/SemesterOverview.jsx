import React, {useState, useEffect} from 'react';

import Semester from "./Semester";
import './styles/SemesterOverview.css';

function SemesterOverview({semesters, setSemesters, semester, course,
     callIndex, setCallIndex, gpaScale, setCourseCredits, setGradePoints}) {

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

    // Array of course credits
    useEffect(() => {
    let hasChanges = false;
    setSemesters(prevSemesters =>
        prevSemesters.map((semester) => {
        const semesterTotalCourseCredits = semester?.courses?.reduce(
            (acc, course) => acc + Number(course.courseCredits || 0),
            0
        );

        const gradePoints = semester?.courses?.map(course =>
            calculateGradePoint(course.grade) * Number(course.courseCredits || 0)
        );

        const totalGradePoints = gradePoints?.reduce((acc, gradePoint) => acc + gradePoint, 0);

        const gpa =
            semesterTotalCourseCredits > 0
            ? (totalGradePoints / semesterTotalCourseCredits).toFixed(2)
            : "0.00";

        // Only update if GPA actually changes
        if (semester.gpa !== gpa) {
            hasChanges = true;
            return { ...semester, gpa };
        }
        return semester;
        })
    );
    }, [gpaScale, JSON.stringify(semesters.map(s => s.courses))]); 






    return (
    <>
        <div className="box3 container semester-summary">
            <h2>Semester Overview</h2>
            <button className="add-button" onClick={addSemester}>+ Add New Semester</button>

            <div className="semester-list">
                {  
                    safeSemesters?.map(semester => {
                        return <li key={semester.id}>{<Semester 
                            gpa={semester.gpa} 
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

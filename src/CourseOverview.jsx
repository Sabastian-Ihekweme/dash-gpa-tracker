import React, {useContext, useEffect, useState} from 'react';

import Course from "./Course";
import './styles/CourseOverview.css';

function CourseOverview({callIndex, setCallIndex, course, semesters, setSemesters}) {

    const [courseIndex, setCourseIndex] = useState();

    // Get current semester
    let currentSemester = undefined;
    currentSemester = semesters?.find(s => s.id === callIndex);


    // Add Course 
    function addCourse(newCourse) {
        setSemesters(prevSemesters => {
            return prevSemesters.map(semester => 
                semester.id === callIndex ? 
                {...semester, courses: [...semester.courses, newCourse]} : semester
            )
        })
    };



    return (
    <>
        <div className="box4 container course-summary">
            <h2>{currentSemester?.name || 'View'} Courses</h2> <br />
            {currentSemester?.name && 
                <button onClick={() => addCourse(course)}>+ Add Course</button>
            }

            <div className="course-list">
            {
                currentSemester?.courses?.map(course => {
                    return (
                    currentSemester.id == callIndex ? 
                    <li key={course?.id} onClick={() => setCourseIndex(course.id)}>
                    <Course
                    course={course?.id} 
                    courseIndex={courseIndex}
                    setCourseIndex={setCourseIndex}
                    courseCode={course?.courseCode}
                    courseTitle={course?.courseTitle}
                    grade={course?.grade} 
                    courseCredits={course?.courseCredits}
                    semesters={semesters}
                    setSemesters={setSemesters} callIndex={callIndex}/>
                    </li> : ''
                )})
            }
            </div>

            <p>Double click course do delete</p>
            
        </div>
    </>
    )
}

export default CourseOverview;

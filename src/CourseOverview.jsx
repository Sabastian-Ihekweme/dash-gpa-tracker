import React, {useContext, useEffect} from 'react';

import Course from "./Course";
import './styles/CourseOverview.css';

function CourseOverview({callIndex, setCallIndex, course, semesters, setSemesters}) {

    // Get current semester
    const currentSemester = semesters?.find(s => s.id === callIndex);
    console.log('Current Semester:', currentSemester?.name);

    useEffect(() => {
        console.log(semesters);
    }, [semesters]);


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
            <h2>Fall 2023 Courses</h2> <br />
            <button onClick={() => addCourse(course)}>+ Add Course</button>

            <div className="course-list">
            {
                currentSemester?.courses?.map(course => {
                    return <li key={course.id}><Course 
                    courseCode={course.courseCode}
                    courseTitle={course.courseTitle}
                    grade={course.grade}/></li>
                })
            }
            </div>
            
        </div>
    </>
    )
}

export default CourseOverview;

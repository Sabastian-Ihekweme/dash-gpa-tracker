import React, { useState, useEffect } from 'react';

import './styles/CourseOverview.css';
import deleteIcon from './assets/icons/delete-icon.png'; 

function Course({courseCode, courseTitle, grade, semesters, setSemesters, 
    course, callIndex, courseIndex, setCourseIndex}) {


    // Course select index 

    // Delete course
    function deleteCourse() {
        setSemesters(prevSemesters => 
            prevSemesters.map(semester =>
                semester.id === callIndex
                    ? {
                        ...semester,
                        courses: semester.courses.filter(c => c.id !== courseIndex)
                    }
                    : semester
            )
        );

        setCourseIndex(undefined); // reset selection
    }

    // Handle course code change
    function changeCourseCode() {
        
    }

    
    return (
    <>
        <div className="course-box">
            <div className="course-description">
                <input placeholder="XXX 101" 
                className="course-code" name="course-code" type="text"/>
                <input placeholder="Course Title" 
                className="course-title" name="course-title" type="text"/>
            </div>

            <div className="course-details">
                <input className="course-credits" name="course-credits" type="number"
                placeholder="3" />
                <span>Credits</span>

                <span className="grade-letter"><input className="grade" name="grade"
                type="text" placeholder="A" /></span>

                <button onClick={deleteCourse} className="delete-button">
                    <img className="delete-icon" src={deleteIcon}/>
                </button>

            </div>
        </div>
    </>
    )
}

export default Course;


import React, { useState, useEffect } from 'react';

import './styles/CourseOverview.css';
import deleteIcon from './assets/icons/delete-icon.png'; 

function Course({courseCode, courseTitle, grade, semesters, setSemesters, 
    course, callIndex, courseIndex, setCourseIndex, courseCredits}) {


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
    function changeCourseCode(event) {
        const newCourseCode = event.target.value;

        setSemesters(prevSemesters =>
            prevSemesters.map(semester =>
                semester.id === callIndex
                    ? {
                        ...semester,
                        courses: semester.courses.map(course =>
                            course.id === courseIndex
                                ? { ...course, courseCode: newCourseCode }
                                : course
                        )
                    }
                    : semester
            )
        );
    }


    // Handle course title change
    function changeCourseTitle(event) {
        const newCourseTitle = event.target.value;

        setSemesters(prevSemesters => 
            prevSemesters.map(semester => 
                semester.id === callIndex
                ? {
                    ...semester,
                    courses: semester.courses.map(course => 
                        course.id === courseIndex
                        ? {...course, courseTitle: newCourseTitle} : course
                    )
                }
                : semester
            )
        )
    }

        // Handle course credit change
    function changeCourseCredits(event) {
        const newCourseCredits = event.target.value;

        setSemesters(prevSemesters => 
            prevSemesters.map(semester => 
                semester.id === callIndex
                ? {
                    ...semester,
                    courses: semester.courses.map(course => 
                        course.id === courseIndex
                        ? {...course, courseCredits: newCourseCredits} : course
                    )
                }
                : semester
            )
        )
    }

    // Handle course credit change
    function changeGrade(event) {
        const newGrade = event.target.value;

        setSemesters(prevSemesters => 
            prevSemesters.map(semester => 
                semester.id === callIndex
                ? {
                    ...semester,
                    courses: semester.courses.map(course => 
                        course.id === courseIndex
                        ? {...course, grade: newGrade} : course
                    )
                }
                : semester
            )
        )
    }





    
    return (
    <>
        <div className="course-box">
            <div className="course-description">

                <input 
                value={courseCode || ""}
                placeholder="XXX 101" 
                onChange={changeCourseCode}
                className="course-code" 
                name="course-code" 
                type="text"/>

                <input 
                value={courseTitle || ""}
                onChange={changeCourseTitle}
                placeholder="Course Title" 
                className="course-title" 
                name="course-title" 
                type="text"/>
            </div>

            <div className="course-details">
                <input 
                value={courseCredits || ""}
                onChange={changeCourseCredits}
                className="course-credits" 
                name="course-credits" 
                type="number"
                placeholder="0" />
                <span>Credits</span>

                <span className="grade-letter">
                    <select 
                    value={grade || ""}
                    onChange={changeGrade}
                    className="grade" 
                    name="grade"
                    placeholder="A">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    
                    </span>

                <button onClick={deleteCourse} className="delete-button">
                    <img className="delete-icon" src={deleteIcon}/>
                </button>

            </div>
        </div>
    </>
    )
}

export default Course;


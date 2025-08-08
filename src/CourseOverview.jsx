import Course from "./Course";
import './styles/CourseOverview.css';

function CourseOverview() {
    return (
    <>
        <div className="box4 container course-summary">
            <h2>Fall 2023 Courses</h2> <br />
            <button>+ Add Course</button>

            <div className="course-list">
            <Course />
            <Course />
            <Course />
            </div>
            
        </div>
    </>
    )
}

export default CourseOverview;

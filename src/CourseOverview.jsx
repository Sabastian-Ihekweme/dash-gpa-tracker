import Course from "./Course";

function CourseOverview() {
    return (
    <>
        <div className="course-summary">
            <h2>Fall 2023 Courses</h2> <br />
            <button>+ Add Course</button>

            <Course />
            <Course />
            <Course />
        </div>
    </>
    )
}

export default CourseOverview;

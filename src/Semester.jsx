import deleteicon from "./assets/icons/delete-icon.png";
import './styles/SemesterOverview.css';

function Semester() {
    return (
    <>
        <div className="semester-box">
            <div className="semester-description">
                <input type="text" name="course-title" placeholder="Fall 2023"/>
                <p className="course-count">5 courses</p>
            </div>

            <div className="semester-details">
            <div className="semester-gpa">
                GPA: 4.87
            </div>

            <button className="delete-button">
                <img className="delete-icon" src={deleteicon} ></img>
            </button>
            </div>
        </div>
    </>
    )
}

export default Semester;

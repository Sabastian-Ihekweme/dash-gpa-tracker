import './styles/CourseOverview.css';
import deleteIcon from './assets/icons/delete-icon.png'; 

function Course({courseCode, courseTitle, grade}) {

    // Change C
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

                <button className="delete-button">
                    <img className="delete-course delete-icon" src={deleteIcon}/>
                </button>
            </div>
        </div>
    </>
    )
}

export default Course;


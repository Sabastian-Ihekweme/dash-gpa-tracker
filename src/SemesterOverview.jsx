import Semester from "./Semester";
import './styles/SemesterOverview.css';

function SemesterOverview() {
    return (
    <>
        <div className="box3 container semester-summary">
            <h2>Semester Overview</h2>
            <button className="add-button">+ Add New Semester</button>

            <div className="semester-list">
            <Semester />
            <Semester />
            <Semester />
            </div>

            <p>Click on a semester to view details</p>
        </div>
    </>
    )
}

export default SemesterOverview;

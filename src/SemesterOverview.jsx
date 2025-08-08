import Semester from "./Semester";

function SemesterOverview() {
    return (
    <>
        <div className="semester-summary">
            <h2>Semester Overview</h2> <br />
            <button>+ Add New Semester</button>

            <Semester />
            <Semester />
            <Semester />

            <p>Click on a semester to view details</p>
        </div>
    </>
    )
}

export default SemesterOverview;

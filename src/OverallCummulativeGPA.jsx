import "./styles/OverallCummulativeGPA.css";

function OverallCummulativeGPA({cgpa, setCgpa, totalCredits}) {


    return (
    <>
        <div className="box1 container gpa-summary">
            <h2>Overall Cummulative GPA</h2>

            <div className="gpa-circle">
                <p className="cgpa-value">{cgpa}</p>
                <p className="cgpa">CGPA</p>
            </div>

            <p>Total Credit Unites</p>
            <p className="total-credit-units">{totalCredits}</p>
        </div>
    </>
    )
}

export default OverallCummulativeGPA;

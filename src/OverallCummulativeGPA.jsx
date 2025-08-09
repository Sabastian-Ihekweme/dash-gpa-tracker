import "./styles/OverallCummulativeGPA.css";

function OverallCummulativeGPA() {


    return (
    <>
        <div className="box1 container gpa-summary">
            <h2>Overall Cummulative GPA</h2>

            <div className="gpa-circle">
                <p className="cgpa-value">4.87</p>
                <p className="cgpa">CGPA</p>
            </div>

            <p>Total Credit Unites</p>
            <p className="total-credit-units">60</p>
        </div>
    </>
    )
}

export default OverallCummulativeGPA;

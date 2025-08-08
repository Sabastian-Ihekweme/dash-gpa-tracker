import './styles/GPAScaleSettings.css';

function GPAScaleSettings() {
    return (
    <>
        <div className="box2 container scale-settings">
            <h2>GPA Scale Settings</h2>

            <p>Manage your grading scales</p>

            <div class="select-scale">
                <p>Current Scale: <span class="scale">4.0 Scale</span></p>

                <p className="select-scale">Select Scale:</p>
                <select className="select-scale" placeholder="Select Scale">
                    <option>4.0 Scale</option>
                    <option>5.0 Scale</option>
                </select>
            </div>
        </div>
    </>
    )
}

export default GPAScaleSettings;

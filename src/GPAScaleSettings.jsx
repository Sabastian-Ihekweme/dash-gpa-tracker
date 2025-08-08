
function GPAScaleSettings() {
    return (
    <>
        <div className="scale-settings">
            <h2>GPA Scale Settings</h2>

            <p>Manage your grading scales</p>

            <div class="select-scale">
                <p>Current Scale: <span class="scale">4.0 Scale</span></p>
                <select placeholder="Select Scale">
                    <option>4.0 Scale</option>
                    <option>5.0 Scale</option>
                </select>
            </div>
        </div>
    </>
    )
}

export default GPAScaleSettings;

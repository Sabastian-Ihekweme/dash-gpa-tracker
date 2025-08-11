import React, { useEffect } from 'react';

import './styles/GPAScaleSettings.css';

function GPAScaleSettings({gpaScale, setGpaScale}) {

    const handleChange = (event) => {
        setGpaScale(event.target.value)
    }

    return (
    <>
        <div className="box2 container scale-settings">
            <h2>GPA Scale Settings</h2>

            <p>Manage your grading scales</p>

            <div className="select-scale">
                <p>Current Scale: <span className="scale">{gpaScale} Scale</span></p>

                <p className="select-scale">Select Scale:</p>
                <select className="select-scale" value={gpaScale} onChange={handleChange}>
                    <option value="4.0">4.0 Scale</option>
                    <option value="5.0">5.0 Scale</option>
                </select>
            </div>

            <p>{ gpaScale == '5.0' ? 'A: 70-100. B: 60-69. C: 50-59. D: 45-49. E: 40-44. F: 0-39'
            : 'A: 70-100. B: 60-69. C: 50-59. D: 40-49. F: 0-39'}</p>
        </div>
    </>
    )
}

export default GPAScaleSettings;

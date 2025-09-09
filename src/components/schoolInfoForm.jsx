// schoolInfoForm.jsx

import { useState } from "react"


export default function SchoolInfoForm({ addSchool, updateSchool, isEditing, EditingIndex, currentSchool }){
    // if editing intialize state with currentschool else empty
    const [schoolInfo, setSchoolInfo] = useState(
        currentSchool || {degree : ''},

    );
     //If editinngIndex change, we rewrite the state manually
    if (isEditing && currentSchool && schoolInfo && schoolInfo.degree === "") {
        setSchoolInfo(currentSchool)
    }
 

    function handleChange(e) {
        const { name, value } = e.target;
        setSchoolInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    
    function handleClick() {
        if (isEditing) {
            updateSchool(schoolInfo)
        }

        else {
            addSchool(schoolInfo)
        }
        setSchoolInfo({degree :""})
    }

    
    return(
        <>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="validationServer01" className="form-label">Degree Program</label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer01"
                        name="degree"
                        placeholder="M.Sc"
                        value={schoolInfo.degree}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/*
                <div className="col-md-6">
                    <label htmlFor="validationServer02" className="form-label">Major</label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer02"
                        placeholder="Chemical Engineering"
                        name="Major"
                        value={schoolInfo.lastName}
                        onChange={schoolHandleChange}
                        required
                    />
                </div>
                */}
            </form> 

            {/*
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="validationServer01" className="form-label">University</label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="validationServer01"
                        name="university"
                        placeholder="Harvard University"
                        value={schoolInfo.university}
                        onChange={schoolHandleChange}
                        required
                    />
                </div>
            </form>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="validationServer01" className="form-label">Year</label>
                    <input
                        type="number"
                        className="form-control is-valid"
                        id="graduateYear"
                        name="graduateYear"
                        placeholder="2025"
                        value={schoolInfo.graduateYear}
                        onChange={schoolHandleChange}
                        required
                    />
                </div>
        
            </form>
            */}

            <button onClick={handleClick} className="btn btn-primary">{isEditing ? "Save Changes" : "Add New"}</button>
        </>

        
    )
}
// experienceForm.jsx
import { useState } from "react"



export default function ExperienceForm({addExperience, updateExperience,isEditing, editingIndexExperience, currentExperience}){
    
    const [experienceInfo, setExperienceInfo] = useState(currentExperience || { jobTitle: '' });
    
    if(isEditing && currentExperience && experienceInfo === "") {
        setExperienceInfo(currentExperience)
    }
    function handleChange(e) {
        const {name,value} = e.target;
        setExperienceInfo((prev) =>({
            ...prev,
            [name]: value,
        }));
    }

    function handleClick(e) {
        if (isEditing) {
            updateExperience(experienceInfo) // update the array element of this experience
        }
        else {
            addExperience(experienceInfo) //add this to the end of array
        }
        setExperienceInfo({})
    }

    return(
        <>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="jobTitle" className="form-label">Job Title</label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="Process Engineer"
                        value={experienceInfo.jobTitle}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form> 
            <button onClick={handleClick} className="btn btn-primary">{isEditing ? "Save Changes" : "Add New"}</button>
        </>

        
    )

    


}
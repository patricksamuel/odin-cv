//schoolInfoRender.jsx

export default function ExperienceRender({experienceList, setEditingIndexExperience}){
    if (experienceList.length >0){
        return(
            <>
                <h2>Experience</h2>
                <ul>
                {experienceList.map((experience,index) => (
                    <li key ={index}>
                        {experience.jobTitle}
                        <button 
                            onClick = {()=> setEditingIndexExperience(index)}
                            className="btn btn-warning btn-sm ms-2"
                        >
                            Edit
                        </button>
                    </li>
                ))}
                </ul>
            </>
        )  
    }
}
//schoolInfoRender.jsx

export default function SchoolInfoRender({schoolInfoList, setEditingIndex}){
    if (schoolInfoList.length >0){
        return(
            <>
                <h2>Education</h2>
                <ul>
                {schoolInfoList.map((school,index) => (
                    <li key ={index}>
                        {school.degree}
                        <button 
                            onClick = {()=> setEditingIndex(index)}
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
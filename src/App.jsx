// App.jsx

import { use, useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/generalInfoForm'
import GeneralInfoRender from './components/generalInfoRender';
import SchoolInfoForm from './components/schoolInfoForm';
import SchoolInfoRender from './components/schoolInfoRender';
import ExperienceForm from './components/experienceForm';
import ExperienceRender from './components/experienceRender';


function App() {
  const [editingIndexExperience, setEditingIndexExperience] = useState(null)
  const [experienceList, setExperienceList] = useState([])
  

  function addExperience(newExperience){
    setExperienceList((prev) => [...prev,newExperience])
  }

  function updateExperience(updatedExperience){
    setExperienceList((prev)=>(
      prev.map((experience,index) => 
        index === editingIndexExperience ? updatedExperience : experience
      )
    ))
    setEditingIndexExperience(null)
  }

  
  const [schoolInfoList, setschoolInfoList] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)

  function addSchool(newSchool){
    setschoolInfoList((prev)=>[...prev,newSchool])
  }

  function updateSchool(updatedSchool){
    setschoolInfoList((prev) =>
      prev.map((school,index) => {
        if (index === editingIndex) {
          return updatedSchool
        }
        else {
          return school
        }
      }
    ))
    setEditingIndex(null)
  }


  const [generalInfo, setGeneralInfo] = useState({
    firstName : '',
    lastName : '',
    address : '',
    email : '',
    phoneNumber : '',
  });



  function handleChange(e) {
      const { name, value} = e.target;
      setGeneralInfo((prev)=>({
        ...prev,
        [name]: value,
      }))
  }



  return (

     <div className='app-container'>
      <div className='form-section'>
        <h2>Personal Information</h2>
        <GeneralInfoForm
          generalInfo = {generalInfo}
          handleChange = {handleChange}
        />
        <h2>School</h2>
        <SchoolInfoForm
          addSchool = {addSchool}
          updateSchool={updateSchool}
          isEditing={editingIndex !== null}
          editingIndex={editingIndex}
          currentSchool ={editingIndex !== null ? schoolInfoList[editingIndex] : null}
        />
        <ExperienceForm
          addExperience = {addExperience}
          updateExperience={updateExperience}
          isEditing={editingIndexExperience !== null}
          editingIndexExperience={editingIndexExperience}
          currentExperience ={editingIndexExperience !== null ? experienceList[editingIndexExperience] : null}
        />
      </div>
      <div className='preview-section'>
        <GeneralInfoRender generalInfo={generalInfo}/>
        <SchoolInfoRender schoolInfoList={schoolInfoList} setEditingIndex = {setEditingIndex}/>
        <ExperienceRender experienceList={experienceList} setEditingIndexExperience = {setEditingIndexExperience}/>
      </div>
    </div> 
  );
}

export default App

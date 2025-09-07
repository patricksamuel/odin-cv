// App.jsx

import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/generalInfoForm'
import GeneralInfoRender from './components/generalInfoRender';
import SchoolInfoForm from './components/schoolInfoForm';

function App() {
  const [schoolInfoList, setschoolInfoList] = useState([])

  function addSchool(newSchool){
    setschoolInfoList((prev)=>[...prev,newSchool])
  }


  const [generalInfo, setGeneralInfo] = useState({
    firstName : '',
    lastName : '',
    address : '',
    Email : '',
    phoneNumber : '',
  });



  function handleChange(e) {
      const { name, value} = e.target;
      setGeneralInfo((prev)=>({
        ...prev,
        [name]: value,
      }))
  }

  function schoolHandleChange(e) {
    return
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
        />
      </div>
      <div className='preview-section'>
        <GeneralInfoRender generalInfo={generalInfo}/>
        <h2>Education</h2>
        <ul>
          {schoolInfoList.map((school,index) => (
            <li key ={index}>
              {school.degree}
            </li>
          ))}
        </ul>
      </div>
    </div> 
  );
}

export default App

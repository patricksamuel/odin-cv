// App.jsx

import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/generalInfoForm'
import GeneralInfoRender from './components/generalInfoRender';

function App() {
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

  return (

     <div className='app-container'>
      <div className='form-section'>

        <GeneralInfoForm
          generalInfo = {generalInfo}
          handleChange = {handleChange}
        />
      </div>
      <div className='preview-section'>
        <GeneralInfoRender generalInfo={generalInfo}/>
      </div>
    </div> 
  );
}

export default App

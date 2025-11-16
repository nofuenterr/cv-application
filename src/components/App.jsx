import CreateCV from './CreateCV'
import PreviewCV from './PreviewCV'
/* import '../styles/App.css' */
import { useState } from 'react'

const contactDetails = {
  fullName: '',
  desiredJobTitle: '',
  phone: '',
  email: '',
  address: '',
}

function App() {
  const [contacts, setContacts] = useState(contactDetails)
  const [education, setEducation] = useState([])
  const [activeEducationID, setActiveEducationID] = useState(null)
  const [experience, setExperience] = useState([])
  const [activeExperienceID, setActiveExperienceID] = useState(null)

  function handleContacts(e) {
    const id = e.target.id
    const value = e.target.value
    setContacts({ ...contacts, [id]: value })
  }

  function handleEducation(e) {
    const value = e.target.value
    const key = e.target.dataset.key
    const itemID = e.target.dataset.itemId
    const newEducation = education.map(item => {
      if (item.id === itemID) {
        item[key] = value
      }
      return item
    })
    setEducation(newEducation)
  }

  function addEducation() {
    const newEducation = [...education]
    newEducation.push(
      {
        id: crypto.randomUUID(),
        schoolName: '',
        location: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: '',
      }
    )
    const newActiveID = newEducation.at(-1).id
    setEducation(newEducation)
    setActiveEducationID(newActiveID)
  }

  function deleteEducation(itemID) {
    const newEducation = education.filter(item => item.id !== itemID)
    setEducation(newEducation)
  }

  function handleActiveEducationID(itemID) {
    activeEducationID === itemID ? setActiveEducationID(null) : setActiveEducationID(itemID)
  }

  function handleExperience(e) {
    const value = e.target.value
    const key = e.target.dataset.key
    const itemID = e.target.dataset.itemId
    const newExperience = experience.map(item => {
      if (item.id === itemID) {
        item[key] = value
      }
      return item
    })
    setExperience(newExperience)
  }

  function addExperience() {
    const newExperience = [...experience]
    newExperience.push(
      {
        id: crypto.randomUUID(),
        jobTitle: '',
        employer: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      }
    )
    const newActiveID = newExperience.at(-1).id
    setExperience(newExperience)
    setActiveExperienceID(newActiveID)
  }

  function deleteExperience(itemID) {
    const newExperience = experience.filter(item => item.id !== itemID)
    setExperience(newExperience)
  }

  function handleActiveExperienceID(itemID) {
    activeExperienceID === itemID ? setActiveExperienceID(null) : setActiveExperienceID(itemID)
  }

  return (
    <>
      <CreateCV 
        handleContacts={handleContacts}

        handleEducation={handleEducation}
        addEducation={addEducation}
        educationList={education}
        deleteEducation={deleteEducation}
        handleActiveEducationID={handleActiveEducationID}
        activeEducationID={activeEducationID}
        
        handleExperience={handleExperience}
        addExperience={addExperience}
        experienceList={experience}
        deleteExperience={deleteExperience}
        handleActiveExperienceID={handleActiveExperienceID}
        activeExperienceID={activeExperienceID}
      />
      <PreviewCV
        contacts={contacts}
        educationList={education}
        experienceList={experience}
      />
    </>
  )
}

export default App

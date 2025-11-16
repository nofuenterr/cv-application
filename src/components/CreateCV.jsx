import ContactsInputs from "./ContactInputs"
import InputWrapper from "./InputWrapper"
import Section from "./Section"
import AddItem from "./AddItem"
import List from "./List"
import '../styles/CreateCV.css'

function CreateCV({ 
    handleContacts, 
    handleEducation, 
    addEducation, 
    educationList, 
    deleteEducation, 
    handleActiveEducationID, 
    activeEducationID, 
    handleExperience, 
    addExperience, 
    experienceList, 
    deleteExperience, 
    handleActiveExperienceID,
    activeExperienceID,
    handleSetActiveSections,
    activeSections
  }) {
  return (
    <div className="create-cv">
      <Section
        className="contacts-section"
        headline="Contacts"
        description="Add your up-to-date contact information so employers and recruiters can easily reach you."
        onClick={handleSetActiveSections}
        activeSections={activeSections}
      >
        <InputWrapper>
          <ContactsInputs
            onChange={handleContacts}
          />
        </InputWrapper>
      </Section>

      <Section
        className="education-section"
        headline="Education"
        description="Add your education details - even if you haven’t graduated yet."
        onClick={handleSetActiveSections}
        activeSections={activeSections}
      >
        <List
          section="education"
          list={educationList}
          onChange={handleEducation}
          deleteItem={deleteEducation}
          handleActiveID={handleActiveEducationID}
          activeID={activeEducationID}
        />
        <AddItem
          onClick={addEducation}
          buttonText="+ Add education"
        />
      </Section>

      <Section
        className="experience-section"
        headline="Experience"
        description="List your work experience starting with the most recent position first."
        onClick={handleSetActiveSections}
        activeSections={activeSections}
      >
        <List
          section="experience"
          list={experienceList}
          onChange={handleExperience}
          deleteItem={deleteExperience}
          handleActiveID={handleActiveExperienceID}
          activeID={activeExperienceID}
        />
        <AddItem
          onClick={addExperience}
          buttonText="+ Add experience"
        />
      </Section>
    </div>
  )
}

export default CreateCV
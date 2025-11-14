import ContactsInputs from "./ContactInputs"
import InputWrapper from "./InputWrapper"
import Section from "./Section"
import AddItem from "./AddItem"
import List from "./List"

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
  }) {
  return (
    <div>
      <Section
        headline="Contacts"
        description="Add your up-to-date contact information so employers and recruiters can easily reach you."
      >
        <InputWrapper>
          <ContactsInputs
            onChange={handleContacts}
          />
        </InputWrapper>
      </Section>

      <Section
        headline="Education"
        description="Add your education details - even if you haven’t graduated yet."
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
          buttonText="Add education"
        />
      </Section>

      <Section
        headline="Experience"
        description="List your work experience starting with the most recent position first."
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
          buttonText="Add experience"
        />
      </Section>
    </div>
  )
}

export default CreateCV
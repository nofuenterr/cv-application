import InputBlock from "./InputBlock"
import TextareaBlock from "./TextareaBlock"

function ExperienceInputs({ item, index, onChange }) {
  return (
    <>
      <InputBlock
        label="Job title"
        inputID={"jobTitle_" + index}
        inputName={"jobTitle_" + index}
        dataKey="jobTitle"
        dataItemID={item.id}
        inputType="text"
        placeholder="Red Gloves"
        maxlength={50}
        onChange={onChange}
        value={item.jobTitle}
      />
      <InputBlock
        label="Employer"
        inputID={"employer_" + index}
        inputName={"employer_" + index}
        dataKey="employer"
        dataItemID={item.id}
        inputType="text"
        placeholder="Dunn Smith"
        maxlength={50}
        onChange={onChange}
        value={item.employer}
      />
      <InputBlock
        label="Location"
        inputID={"location_" + index}
        inputName={"location_" + index}
        dataKey="location"
        dataItemID={item.id}
        inputType="text"
        placeholder="Backlund University"
        maxlength={50}
        onChange={onChange}
        value={item.location}
      />
      <InputBlock
        label="Start Date"
        inputID={"startDate_" + index}
        inputName={"startDate_" + index}
        dataKey="startDate"
        dataItemID={item.id}
        inputType="date"
        placeholder="MM/YYYY"
        autocomplete="off"
        onChange={onChange}
        value={item.startDate}
      />
      <InputBlock
        label="End Date"
        inputID={"endDate_" + index}
        inputName={"endDate_" + index}
        dataKey="endDate"
        dataItemID={item.id}
        inputType="date"
        placeholder="MM/YYYY"
        autocomplete="off"
        onChange={onChange}
        value={item.endDate}
      />
      <TextareaBlock
        label="Description"
        inputID={"description_" + index}
        inputName={"description_" + index}
        dataKey="description"
        dataItemID={item.id}
        placeholder="Enter description"
        onChange={onChange}
        value={item.description}
      />
    </>
  )
}

export default ExperienceInputs
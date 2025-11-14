import InputBlock from "./InputBlock"

function ExperienceInputs({ item, index, onChange }) {
  return (
    <>
      <InputBlock
        label="Job title"
        inputID={"jobTitle_" + index}
        inputName={"jobTitle_" + index}
        dataInputID="jobTitle"
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
        dataInputID="employer"
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
        dataInputID="location"
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
        dataInputID="startDate"
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
        dataInputID="endDate"
        dataItemID={item.id}
        inputType="date"
        placeholder="MM/YYYY"
        autocomplete="off"
        onChange={onChange}
        value={item.endDate}
        />
    </>
  )
}

export default ExperienceInputs
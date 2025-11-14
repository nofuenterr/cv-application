import InputBlock from "./InputBlock"

function EducationInputs({ item, index, onChange }) {
  return (
    <>
      <InputBlock
        label="School name"
        inputID={"schoolName_" + index}
        inputName={"schoolName_" + index}
        dataInputID="schoolName"
        dataItemID={item.id}
        inputType="text"
        placeholder="Backlund University"
        maxlength={50}
        onChange={onChange}
        value={item.schoolName}
        />
      <InputBlock
        label="Location"
        inputID={"location_" + index}
        inputName={"location_" + index}
        dataInputID="location"
        dataItemID={item.id}
        inputType="text"
        placeholder="Tingen City, Loen Kingdom"
        maxlength={50}
        onChange={onChange}
        value={item.location}
        />
      <InputBlock
        label="Degree"
        inputID={"degree_" + index}
        inputName={"degree_" + index}
        dataInputID="degree"
        dataItemID={item.id}
        inputType="text"
        placeholder="BS in Computer Science"
        maxlength={50}
        onChange={onChange}
        value={item.degree}
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

export default EducationInputs
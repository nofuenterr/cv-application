import '../styles/InputBlock.css'

function InputBlock({ 
    label, 
    inputID, 
    inputName, 
    dataInputID, 
    dataItemID, 
    inputType, 
    placeholder, 
    maxlength, 
    autocomplete, 
    onChange, 
    value 
  }) {
  return (
    <div className="input-block">
      <label htmlFor={inputID}>{label}</label>
      <input
        id={inputID}
        name={inputName}
        data-input={dataInputID}
        data-item-id={dataItemID}
        type={inputType}
        placeholder={placeholder}
        maxLength={maxlength}
        autoComplete={autocomplete}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  )
}

export default InputBlock
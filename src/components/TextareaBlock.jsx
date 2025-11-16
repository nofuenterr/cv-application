import '../styles/TextareaBlock.css'

function TextareaBlock({ 
    label, 
    inputID, 
    inputName, 
    dataKey, 
    dataItemID, 
    placeholder, 
    onChange, 
    value 
  }) {
  return (
    <div className="textarea-block">
      <label htmlFor={inputID}>{label}</label>
      <textarea
        id={inputID}
        name={inputName}
        data-key={dataKey}
        data-item-id={dataItemID}
        placeholder={placeholder}
        onChange={onChange}
        value={value} 
      ></textarea>
    </div>
  )
}

export default TextareaBlock
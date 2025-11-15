import '../styles/AddItem.css'

function AddItem({ onClick, buttonText }) {
  return (
    <button className="add-item" onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default AddItem
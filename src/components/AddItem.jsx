function AddItem({ onClick, buttonText }) {
  return (
    <button onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default AddItem
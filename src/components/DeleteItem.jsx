import DeleteIcon from '../assets/DeleteIcon'
import '../styles/DeleteItem.css'

function DeleteItem({ onClick, itemID }) {
  return (
    <button className='delete-item' onClick={() => onClick(itemID)}>
      <DeleteIcon />
    </button>
  )
}

export default DeleteItem
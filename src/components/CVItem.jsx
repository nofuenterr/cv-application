import '../styles/CVItem.css'

function CVItem({ item }) {
  let date
  if (item.startDate && item.endDate ) {
    date = item.startDate + ' - ' + item.startDate
  } else if (item.startDate) {
    date = 'from ' + item.startDate
  } else if (item.endDate) {
    date = 'to ' + item.endDate
  }

  return (
    <li className='cv-item' key={item.id}>
      <div className="item--left">
        <p>{date}</p>
        <p>{item.location}</p>
      </div>
      <div className="item--right">
        <p className='item--bold'>{item.employer || item.schoolName}</p>
        <p>{item.jobTitle || item.degree}</p>
      </div>
    </li>
  )
}

export default CVItem
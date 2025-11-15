import '../styles/Item.css'

function getHeader(section, item) {
  let title1
  let title2
  let dateStart
  let dateEnd
  
  if (section === "education") {
    title1 = item.schoolName
    title2 = item.degree
  }
  if (section === "experience") {
    title1 = item.jobTitle
    title2 = item.employer
  }
  dateStart = item.startDate
  dateEnd = item.endDate
  
  let itemTitle
  let itemDate
  const isHeaderEmpty = title1 || title2 || dateStart || dateEnd ? false : true
  
  if (isHeaderEmpty) {
    if (section === "education") {
      itemTitle = "School, Degree"
      itemDate = "MM/YYYY - MM/YYYY"
    }
    if (section === "experience") {
      itemTitle = "Job Title, Employer"
      itemDate = "MM/YYYY - MM/YYYY"
    }
  } else {
    console.log(title1)
    if (title1 && title2) {
      itemTitle = title1 + ', ' + title2
    } else {
      title1 ? itemTitle = title1 : itemTitle = title2
    }
    if (dateStart && dateEnd) {
      itemDate = dateStart + ' - ' + dateEnd
    } else {
      dateStart ? itemDate = dateStart : itemDate = dateEnd
    }
  }

  return [itemTitle, itemDate]
}

function Item({ section, item, deleteItem, onClick, active, children }) {
  const [itemTitle, itemDate] = getHeader(section, item)

  return (
    <li className="item">
      <div className="item-header" onClick={() => onClick(item.id)}>
        <div>
          <p>{itemTitle}</p>
          <p>{itemDate}</p>
        </div>
        <button onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </div>
      {active ? children : null}
    </li>
  )
}

export default Item
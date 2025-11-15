import ChevronDown from '../assets/ChevronDown.jsx'
import DeleteItem from './DeleteItem.jsx'
import '../assets/DeleteIcon.jsx'
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
  const isPlaceholder = itemTitle && itemDate

  return (
    <li className="item">
      <div className="item-header" onClick={() => onClick(item.id)}>
        <div className={'header-text' + (isPlaceholder ? ' placeholder' : '')}>
          <p>{itemTitle}</p>
          <p>{itemDate}</p>
        </div>
        <ChevronDown 
          active={active}
        />
        <DeleteItem 
          onClick={deleteItem}
          itemID={item.id}
        />
      </div>
      {active ? children : null}
    </li>
  )
}

export default Item
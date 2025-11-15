import CVItem from './CVItem.jsx'
import '../styles/CVSection.css'

function isListEmpty(list) {
  return list.length < 1
}

function getCVSection(list, headerText) {
  return (
    <div className='cv-section'>
      <p className='cv-section-header'>{headerText}</p>
      <ul className='cv-list'>
        {list.map(item => <CVItem item={item} />)}
      </ul>  
    </div>
  )
}

function CVSection({ list, headerText }) {
  return (
    !isListEmpty(list) && getCVSection(list, headerText)
  )
}

export default CVSection
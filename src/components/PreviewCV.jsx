import '../styles/PreviewCV.css'
import CVSection from './CVSection'

function PreviewCV({ contacts, educationList, experienceList }) {
  /* const desiredJobTitle = contacts.desiredJobTitle */
  let email = contacts.email
  let phone = contacts.phone
  let address = contacts.address
  const fullName = contacts.fullName
  email = email && (phone || address) ? email + ' | ' : email
  phone = phone && address ? phone + ' | ' : phone

  return (
    <div className="preview-cv">
      <div className="cv">
        <div className='cv-header'>
          <p className='name'>{fullName}</p>
          <p className='info'>{email + phone + address}</p>
        </div>
        <div className='cv-body'>
          <CVSection headerText="Education" list={educationList} />
          <CVSection headerText="Experience" list={experienceList} />
        </div>
      </div>
    </div>
  )
}

export default PreviewCV

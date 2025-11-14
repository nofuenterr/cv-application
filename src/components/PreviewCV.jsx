function PreviewCV({ contacts, educationList, experienceList }) {
  const fullName = contacts.fullName
  const desiredJobTitle = contacts.desiredJobTitle
  const phone = contacts.phone
  const email = contacts.email
  const address = contacts.address

  return (
    <div>
      <div>
        <p>{fullName}</p>
        <p>{desiredJobTitle}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{address}</p>
      </div>
      <div>
        <ul>
          {educationList.map(item => {
            return (
              <li key={item.id}> 
                <p>{"School Name: " + item.schoolName}</p>
                <p>{"Location: " + item.location}</p>
                <p>{"Degree: " + item.degree}</p>
                <p>{"Start Date: " + item.startDate}</p>
                <p>{"End Date: " + item.endDate}</p>
              </li>
            )
          })}
        </ul>
        <ul>
          {experienceList.map(item => {
            return (
              <li key={item.id}> 
                <p>{"Job title: " + item.jobTitle}</p>
                <p>{"Employer: " + item.employer}</p>
                <p>{"Location: " + item.location}</p>
                <p>{"Start Date: " + item.startDate}</p>
                <p>{"End Date: " + item.endDate}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PreviewCV

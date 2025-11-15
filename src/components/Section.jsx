import '../styles/Section.css'

function Section({ headline, description, children}) {
  return (
    <section>
      <div className='section-header'>
        <h2>{headline}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  )
}

export default Section
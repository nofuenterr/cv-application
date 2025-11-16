import '../styles/Section.css'

function Section({ className, headline, description, children}) {
  return (
    <section className={className}>
      <div className='section-header'>
        <h2>{headline}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  )
}

export default Section
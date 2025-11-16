import ChevronDown from '../assets/ChevronDown'
import '../styles/Section.css'

function Section({ className, headline, description, onClick, activeSections, children }) {
  const active = activeSections.includes(headline)

  return (
    <section className={className}>
      <div className='section-header'>
        <h2 
          onClick={onClick} 
          data-section={headline}
        >{headline}<span><ChevronDown active={active}/></span></h2>
        {active ? <p>{description}</p> : null}
      </div>
      {active ? children : null}
    </section>
  )
}

export default Section
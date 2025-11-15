import Item from "./Item"
import InputWrapper from "./InputWrapper";
import EducationInputs from "./EducationInputs"
import ExperienceInputs from "./ExperienceInputs";
import '../styles/List.css'

function List({ 
    section, 
    list, 
    onChange, 
    deleteItem, 
    handleActiveID, 
    activeID, 
  }) {
  
  const isListEmpty = list.length < 1

  function getNonEmptyList(isListEmpty) {
    if (!isListEmpty) {
      return <ul className="list">
        {list.map((item, index) => {
          return (
            <Item 
              key={item.id}
              section={section}
              item={item}
              deleteItem={deleteItem}
              onClick={handleActiveID}
              active={item.id === activeID}
            >
              <InputWrapper>
                {
                  section === "education"
                  ? <EducationInputs
                      item={item}
                      index={index}
                      onChange={onChange}
                    />
                  : section === "experience"
                    ? <ExperienceInputs
                        item={item}
                        index={index}
                        onChange={onChange}
                      />
                    : null
                }
              </InputWrapper>
            </Item>
          )
        })}
      </ul>
    } else {
      return null
    }
  }

  return (
    <>
      {getNonEmptyList(isListEmpty)}
    </>
  )
}

export default List
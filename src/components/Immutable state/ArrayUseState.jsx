import { useState } from "react";

const initState = ['Bruce', 'Wayne']
const ObjectUseState = () => {
  const [persons, setPersons] = useState(initState);
  const handleClick = () => {
    // persons.push('Clark')
    // persons.push('Kent')
    // setPersons(persons)

    const newPersons = [...persons]
    newPersons.push('Clark')
    newPersons.push('Kent')
    setPersons(newPersons)
  };

  return (
    <div>
      <button onClick={handleClick}>
        {
            persons.map(person => (
                <div key={person}>{person}</div>
            ))
        }
      </button>
    </div>
  );
};

export default ObjectUseState;

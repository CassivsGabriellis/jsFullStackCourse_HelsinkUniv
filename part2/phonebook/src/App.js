import { useState, useEffect } from "react";
import addPersonService from "./Services/addPersons";
import "./index.css";

import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    addPersonService.getAll().then((data) => setPersons(data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to replace the old number with the new one?`
        )
      ) {
        addPersonService
          .update(existingPerson.id, {
            name: existingPerson.name,
            number: newNumber,
          })
          .then(() => {
            addPersonService.getAll().then((data) => setPersons(data));
          });
      }
      setNewName("");
    } else {
      addPersonService.create({ name: newName, number: newNumber }).then(() => {
        addPersonService.getAll().then((data) => setPersons(data));
      });
      setNewName("");
      setNewNumber("");
    }
  };

  const deletePerson = (id) => {
    addPersonService.deletePerson(id).then(() => {
      addPersonService.getAll().then((data) => setPersons(data));
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter((person) => {
    const nameMatch = person.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const numberMatch = person.number
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || numberMatch;
  });

  return (
    <div>
      <h3 className="header">Phonebook</h3>

      <Filter
        className="input"
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />

      <PersonForm
        className="input"
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Contacts</h3>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;

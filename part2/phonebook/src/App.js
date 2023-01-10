import { useState } from "react";
import "./index.css";

import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Cássio Gabriel", number: "1111-2222", id: 1 },
    { name: "Whindersson Nunes", number: "2222-5555", id: 2 },
    { name: "Caneta Azul", number: "6666-9999", id: 3 },
    { name: "Edinaldo Pereira", number: "7777-8888", id: 4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      alert(`${newName} já está adicionada à lista telefônica!`);
      setNewName("");
    } else {
      setPersons(
        persons.concat({
          id: persons.length + 1,
          name: newName,
          number: newNumber
        })
      );
      setNewName("");
      setNewNumber("");
    }
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

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Lista Telefônica</h3>

      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Pessoas</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;

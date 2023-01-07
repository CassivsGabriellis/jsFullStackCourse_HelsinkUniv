import { useState } from "react";
import Person from "./Components/Person";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      alert(`${newName} is already added to the phonebook`);
      setNewName("");
    } else {
      setPersons(
        persons.concat({
          id: persons.length + 1,
          name: newName,
          number: newNumber,
        })
      );
      setNewName("");
      setNewNumber("");
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with{" "}
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <form onSubmit={addPerson}>
        <div>
          <strong>
            Name:{" "}
            <input
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
          </strong>
        </div>
        <div>
          <strong>
            Number:{" "}
            <input
              value={newNumber}
              onChange={(event) => setNewNumber(event.target.value)}
            />
          </strong>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;

const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form
      onSubmit={(event) => {
        if (newName.length > 0 && newNumber.length > 0) {
          addPerson(event);
        } else {
          event.preventDefault();
          alert("Please fill both name and number fields before submitting.");
        }
      }}
    >
      <div className="input-container">
        <div className="input">
          <strong>
            Name: {""}
            <input
              value={newName}
              onChange={handleNameChange}
              pattern="[A-Za-z !@#$%^&()_+-=[]{};':\|,.<>/?]"
            />
          </strong>
        </div>
        <div className="input">
          <strong>
            Number:{" "}
            <input
              type="text"
              value={newNumber}
              onChange={handleNumberChange}
              pattern="[0-9-]+"
            />
          </strong>
        </div>
        <div>
          <button type="submit">Adicionar</button>
        </div>
      </div>
    </form>
  );
};

export default PersonForm;

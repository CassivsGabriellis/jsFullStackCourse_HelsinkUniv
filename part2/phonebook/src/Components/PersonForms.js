const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        <strong>
          Nome: <input value={newName} onChange={handleNameChange} />
        </strong>
      </div>
      <div>
        <strong>
          Número: <input value={newNumber} onChange={handleNumberChange} />
        </strong>
      </div>
      <div>
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
};

export default PersonForm;

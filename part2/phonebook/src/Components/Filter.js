const Filter = ({ searchTerm, handleSearchChange }) => (
  <div>
    Filtar:
    <input value={searchTerm} onChange={handleSearchChange} />
  </div>
);

export default Filter;

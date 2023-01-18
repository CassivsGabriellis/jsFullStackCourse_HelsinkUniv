const Search = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <strong>
        Find a country:{" "}
        <input type="text" onChange={onSearch} value={searchTerm} />
      </strong>
    </div>
  );
};

export default Search;

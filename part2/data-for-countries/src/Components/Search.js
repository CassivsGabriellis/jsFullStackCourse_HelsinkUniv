const Search = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <input type="text" onChange={onSearch} value={searchTerm} />
    </div>
  );
};

export default Search;

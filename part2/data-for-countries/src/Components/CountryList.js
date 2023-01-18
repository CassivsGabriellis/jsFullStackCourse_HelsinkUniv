const CountryList = ({ countries, onSelectCountry }) => {
  return (
    <ul>
      {countries.map((result) => (
        <li key={result.name.common}>
          {result.name.common}{" "}
          <button onClick={() => onSelectCountry(result)}>show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;

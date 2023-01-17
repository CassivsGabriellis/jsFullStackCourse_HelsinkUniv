const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map((result) => (
        <li key={result.name.common}>{result.name.common}</li>
      ))}
    </ul>
  );
};

export default CountryList;

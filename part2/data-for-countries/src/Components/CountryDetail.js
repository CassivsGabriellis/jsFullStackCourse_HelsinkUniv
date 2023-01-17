const CountryDetail = ({ country }) => {

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} Km</p>
      <p>Flag: {Object.values(country.flag)}</p>
      <p>Languages: {Object.values(country.languages).join(", ")}</p>
    </div>
  );
};

export default CountryDetail;

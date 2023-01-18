import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"
import CountryDetail from "./Components/CountryDetail";
import CountryList from "./Components/CountryList";
import Search from "./Components/Search";
import WeatherReport from "./Components/WeatherReport";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const results = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm, countries]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCountry(null);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const content = !searchTerm ? (
    <p>Enter a search query to see results.</p>
  ) : searchResults.length === 0 ? (
    <p>No countries found.</p>
  ) : searchResults.length > 10 ? (
    <p>Too many matches! Specify another filter.</p>
  ) : selectedCountry ? (
    <div>
      <CountryDetail country={selectedCountry} />
      <WeatherReport country={selectedCountry} />
    </div>
  ) : (
    <CountryList
      countries={searchResults}
      onSelectCountry={handleSelectCountry}
    />
  );

  return (
    <div>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      {content}
    </div>
  );
};

export default App;

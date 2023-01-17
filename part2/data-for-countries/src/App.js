import { useState, useEffect } from "react";
import axios from "axios";
import CountryDetail from "./Components/CountryDetail";
import CountryList from "./Components/CountryList";
import Search from "./Components/Search";


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const results = countries.filter(country => {
      return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm, countries]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  let content;
  if (searchResults.length === 0) {
    content = <p>No countries found.</p>
  } else if (searchResults.length > 10) {
    content = <p>Please make your query more specific.</p>
  } else if (searchResults.length === 1) {
    content = <CountryDetail country={searchResults[0]} />
  } else {
    content = <CountryList countries={searchResults} />
  }

  return (
    <div>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      {content}
    </div>
  );
}

export default App;

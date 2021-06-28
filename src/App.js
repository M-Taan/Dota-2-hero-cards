import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Heroes from "./components/Heores/Heroes";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getHeroes = async () => {
      const res = await axios.get(
        `https://api.opendota.com/api/heroStats  
      `
      );
      console.log(res.data);
      setHeroes(res.data);
    };
    getHeroes();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search setQuery={setQuery} />
      <Heroes heroes={heroes} query={query} />
    </div>
  );
};

export default App;

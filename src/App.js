import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Heroes from "./components/Heores/Heroes";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [query, setQuery] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const getHeroes = async () => {
      const res = await axios.get(
        `https://api.opendota.com/api/heroStats  
      `
      );
      setHeroes(res.data);
      setLoadingStatus(false);
    };
    getHeroes();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search setQuery={setQuery} />
      <Heroes heroes={heroes} query={query} loadingStatus={loadingStatus} />
    </div>
  );
};

export default App;

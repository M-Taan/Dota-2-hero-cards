import { useState } from "react";

const Search = ({ setQuery }) => {
  // State for the nameQuery that will take the value of the search bae
  const [nameQuery, setNameQuery] = useState("");

  // Set the search bar value to the NameQuery and Query states
  const queryRes = (e) => {
    setNameQuery(e.target.value);
    setQuery(e.target.value);
  };
  return (
    <section className="search">
      <input
        className="input"
        type="text"
        placeholder="Search heroes"
        autoFocus
        value={nameQuery}
        onChange={(e) => queryRes(e)}
      />
    </section>
  );
};

export default Search;

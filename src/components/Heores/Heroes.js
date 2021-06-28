import Hero from "./Hero";

const Heroes = ({ heroes, query }) => {
  // Display heroes via the Hero component
  const displayHeroes = (hero) => {
    return hero.id !== 135 && <Hero hero={hero} key={hero.id} />;
  };

  // Query heroes based on their localized_name key and call the display function
  const queryHeroes = (hero, query) => {
    if (
      hero.localized_name.toLowerCase().includes(query.toLowerCase()) &&
      query !== ""
    ) {
      return displayHeroes(hero);
    } else if (query === "") {
      return displayHeroes(hero);
    }
  };

  // Map through heroes and call the queryHeroes function
  const getHeroImg = (query) =>
    heroes.map((hero) => {
      return queryHeroes(hero, query);
    });
  return <section className="cards">{getHeroImg(query)}</section>;
};

export default Heroes;

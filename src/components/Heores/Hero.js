// Returing the JSON object for each hero, displaying the image on the outer card, and some information in the inner card
const Hero = ({ hero }) => {
  const getImmortalWinrate = (hero) => {
    var winrate = (hero["8_win"] / hero["8_pick"]) * 100;
    winrate = winrate.toFixed(2);
    return `${winrate} %`;
  };

  const getProWinrate = (hero) => {
    var winrate = (hero.pro_win / hero.pro_pick) * 100;
    winrate = winrate.toFixed(2);
    return `${winrate} %`;
  };

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={`https://api.opendota.com${hero.img}`} alt=""></img>
        </div>
        <div className="card-back">
          <h1>{hero.localized_name}</h1>
          <ul>
            <li>
              <strong>Primary Attribute: </strong>
              {hero.primary_attr}
            </li>
            <li>
              <strong>Roles: </strong>
              {hero.roles.map((role) => `${role}. `)}
            </li>
            <li>
              <strong>Immortal Winrate: </strong>
              {getImmortalWinrate(hero)}
            </li>
            <li>
              <strong>Professional Winrate: </strong>
              {getProWinrate(hero)}
            </li>
            <li>
              <strong>Professional Bans: </strong>
              {hero.pro_ban}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import dota_logo from "../imgs/dota_logo.png";
const Header = () => {
  // Setting up the logo
  return (
    <header className="center">
      <img className="logo" src={dota_logo} alt="" />
    </header>
  );
};

export default Header;

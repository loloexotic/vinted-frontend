import User from "../pages/Signup";
import { Link } from "react-router-dom";
const Header = () => {
  const handleClick = (user) => {
    return User;
  };

  return (
    <header>
      <img
        src="https://www.leclubargent.com/wp-content/uploads/2021/07/vinted_logo.png"
        className="App-logo"
        alt="logo-vinted"
      />
      <Link to="/signup">
        <div className="signup">
          <button type="submit" onClick={handleClick}>
            S'inscrire
          </button>
        </div>
      </Link>
      <Link to="/login">
        <div className="login">
          <button>Se connecter</button>
        </div>
      </Link>

      <Link to="/publish">
        <div>
          <button className="sold">Vends tes articles</button>
        </div>
      </Link>
    </header>
  );
};

export default Header;

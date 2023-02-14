import User from "../pages/Signup";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Cookies from "js-cookie";

const Header = () => {
  const token = Cookies.get("token");

  return (
    <header>
      <Link to="/">
        <img
          src="https://www.leclubargent.com/wp-content/uploads/2021/07/vinted_logo.png"
          className="App-logo"
          alt="logo-vinted"
        />
      </Link>

      <div className="searchbar">
        <SearchBar />
      </div>

      <Link to="/signup">
        <div className="signup">
          <button type="submit">S'inscrire</button>
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

import logo from "./components/vinted-logo.webp";

const Header = () => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo-vinted" />
      <div>
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </div>
      <button>Vends tes articless</button>
    </header>
  );
};

export default Header;

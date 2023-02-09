const Header = () => {
  return (
    <header>
      <img
        src="https://www.leclubargent.com/wp-content/uploads/2021/07/vinted_logo.png"
        className="App-logo"
        alt="logo-vinted"
      />
      <div className="signup">
        <button>S'inscrire</button>
      </div>
      <div className="login">
        <button>Se connecter</button>
      </div>
      <div>
        <button className="sold">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;

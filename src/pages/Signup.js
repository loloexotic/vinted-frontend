import { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div>
      <h1>S'inscrire</h1>
      <form action="">
        <input
          value={username}
          type="text"
          id="name"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          value={email}
          type="email"
          id="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          id="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div>
          <input type="checkbox" />
          <span>S'inscrire à notre newsletter</span>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button type="submit">S'inscrire</button>
        <Link to="/login"> Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default User;

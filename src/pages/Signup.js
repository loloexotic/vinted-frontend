import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      if (response.data.token) {
        Cookies.set("token", response.data.token, { expires: 5 });

        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
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
          <input
            value={newsletter}
            type="checkbox"
            onChange={() => {
              setNewsletter(newsletter);
            }}
          />
          <span>S'inscrire à notre newsletter</span>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button
          disabled={!username || !email || !password ? true : false}
          type="submit"
        >
          S'inscrire
        </button>
        <Link to="/login"> Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default User;

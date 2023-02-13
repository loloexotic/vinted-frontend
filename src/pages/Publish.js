import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Publish = () => {
  const [file, setFile] = useState({});

  return Login ? (
    <div>
      <form
        action="
    "
      >
        <section>
          <label htmlFor="Titre">
            Titre
            <input type="text" />
          </label>
          <label htmlFor="message">
            Décris ton article
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
        </section>
        <section>
          <label htmlFor="">
            Marque
            <input type="text" />
          </label>
          <label htmlFor="">
            Taille
            <input type="text" />
          </label>
          <label htmlFor="">
            Couleur
            <input type="text" />
          </label>
          <label htmlFor="">
            Etat
            <input type="text" />
          </label>
          <label htmlFor="">
            Lieu
            <input type="text" />
          </label>
        </section>
        <div>
          <label htmlFor="">
            Prix
            <input type="text" />
          </label>
          <input type="checkbox" />
          <span>Je suis interéssé(e) par les échanges</span>
        </div>

        <button>Ajouter</button>
      </form>
    </div>
  ) : (
    <Link to="/login"></Link>
  );
};

export default Publish;

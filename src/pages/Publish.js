import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Publish = () => {
  const [file, setFile] = useState({});
  const [picture, setPicture] = useState();

  const Token = async () => {
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
      params,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return Token ? (
    <div>
      <form>
        <input
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
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

        <button type="submit">Ajouter</button>
      </form>
    </div>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default Publish;

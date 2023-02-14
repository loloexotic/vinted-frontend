import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Publish = () => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");

  const handleToken = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", place);
      formData.append("price", price);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return token ? (
    <div>
      <form>
        <input
          type="file"
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
        />
        <section>
          <label htmlFor="Titre">
            Titre
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label htmlFor="message">
            Décris ton article
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </label>
        </section>
        <section>
          <label htmlFor="">
            Marque
            <input
              type="text"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
          </label>
          <label htmlFor="">
            Taille
            <input
              type="text"
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </label>
          <label htmlFor="">
            Couleur
            <input
              type="text"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </label>
          <label htmlFor="">
            Etat
            <input
              type="text"
              onChange={(e) => {
                setCondition(e.target.value);
              }}
            />
          </label>
          <label htmlFor="">
            Lieu
            <input
              type="text"
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
          </label>
        </section>
        <div>
          <label htmlFor="">
            Prix
            <input
              type="text"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
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

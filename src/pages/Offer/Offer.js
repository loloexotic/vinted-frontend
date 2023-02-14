import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Offer = (offer) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useEffect(true);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <article className="detailoffers">
      <img src={data.product_image.secure_url} alt="" />
      <p>{data.product_price} €</p>
      <p>{data.product_name}</p>
      <p>{data.product_description}</p>
      <p>{data.owner.account.username}</p>
      <Link to="/payment">
        <button type="submit">Ajouter</button>
      </Link>
      <Link to="/">Retour à la page d'accueil</Link>
    </article>
  );
};

export default Offer;

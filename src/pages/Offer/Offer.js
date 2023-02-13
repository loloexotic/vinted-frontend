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
  }, []);
  return (
    <article>
      <div>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    </article>
  );
};

export default Offer;

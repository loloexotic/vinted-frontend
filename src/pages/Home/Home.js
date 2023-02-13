import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SingleOffer from "../../components/SingleOffer";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response)
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <section className="hero">
        <h1>Prêts à faire du tri dans vos placards ? </h1>
        <Link to="/publish">
          <button>Commencer à vendre</button>
        </Link>
      </section>

      <section className="Intro">
        {data.offers.map((offer) => {
          return <SingleOffer offerInfos={offer} key={offer._id} />;
        })}
      </section>

      <div>
        <Link to="/offer">Offer</Link>
      </div>
    </div>
  );
};

export default Home;

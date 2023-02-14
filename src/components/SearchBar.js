import axios from "axios";
import { useState } from "react";

const SearchBar = () => {
  //   const [data, setData] = useState();
  const [searchOffer, setSearchOffer] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    setSearchOffer(e.target.value);

    // try {
    //   const response = await axios.get(
    //     "https://lereacteur-vinted-api.herokuapp.com/offers"
    //   );
    //   // console.log(response)
    //   setData(response.data);
    // } catch (error) {
    //   console.log(error.message);
    // }
    // return data.response.map();
  };

  return (
    <div>
      <input
        value={searchOffer}
        type="text"
        placeholder="Recherche des articles ..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

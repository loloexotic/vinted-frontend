import { Link } from "react-router-dom";

const SingleOffer = ({ offerInfos }) => {
  return (
    <Link to={`/offer/${offerInfos._id}`}>
      <article className="Showoffers">
        <div>
          {offerInfos.owner.account.avatar && (
            <img
              className="Avatar"
              src={offerInfos.owner.account.avatar.secure_url}
              alt=""
            />
          )}
          <span>{offerInfos.owner.account.username}</span>
        </div>
        <img
          className="Productowner"
          src={offerInfos.product_image.secure_url}
          alt=""
        />
        <p>{offerInfos.product_price}</p>
        <div>
          {offerInfos.product_details.map((detail, index) => {
            if (detail.TAILLE && detail.MARQUE) {
              return <p key={index}>{detail.TAILLE}</p>;
              // <p key={index}>{detail.MARQUE}</p>
            }
          })}
          ;
        </div>
      </article>
    </Link>
  );
};

export default SingleOffer;

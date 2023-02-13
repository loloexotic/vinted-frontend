import { Link } from "react-router-dom";

const SingleOffer = ({ offerInfos }) => {
  return (
    <Link to={"/offer/${offerInfos._id}"}>
      <article>
        <div>
          {offerInfos.owner.account.avatar && (
            <img src={offerInfos.owner.account.avatar.secure_url} alt="" />
          )}
          <span>{offerInfos.owner.account.username}</span>
        </div>
        <img src={offerInfos.product_image.secure_url} alt="" />
        <p>{offerInfos.product_price}</p>
      </article>
    </Link>
  );
};

export default SingleOffer;

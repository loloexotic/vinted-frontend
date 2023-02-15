// Pas eu le temps de faire cet exo, juste fait les imports j'y reviendrai

// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import { useState } from "react";

// const Payment = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [completed, setCompleted] = useState(false);
//   const stripe = useStripe();

//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       setIsLoading(true);

//       const cardElement = elements.getElement(CardElement);
//       //   console.log(cardElement);

//       const stripeResponse = await stripe.createToken(cardElement, {
//         name: "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP",
//       });
//       //   console.log(stripeResponse);
//       const stripeToken = stripeResponse.token.id;
//       console.log(stripeToken);

//       const response = await axios.post("", {
//         stripeToken: stripeToken,
//       });
//       console.log(response.data);

//       if (response.data === "succeeded") {
//         setIsLoading(false);
//         setCompleted(true);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Récapitulatif de la commande</h1>
//       <CardElement />

//       {completed ? (
//         <p>Paiement effectué</p>
//       ) : (
//         <button disabled={isLoading} type="submit">
//           Payer
//         </button>
//       )}
//     </form>
//   );
// };

// export default Payment;

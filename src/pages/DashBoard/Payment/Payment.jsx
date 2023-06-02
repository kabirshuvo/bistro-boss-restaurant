import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckOutForm from "./CheckOutForm";

// TODO: provide pk_
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PUBLISHABLE_KEY);

const Payment = () => {
  return (
    <section className="py-7">
      <SectionTitle
        heading="payment"
        subHeading="...please process..."
      ></SectionTitle>


      <h2 className="text-center py-8">Teka O teka tumi uira uira asho ...!!!</h2>

      
     <div className="p-8 flex flex-col     ">
     <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
     </div>
    </section>
  );
};

export default Payment;

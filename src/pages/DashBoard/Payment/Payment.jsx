import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PUBLISHABLE_KEY);
const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))


  return (
    <section className="py-7 payment-style">
      <SectionTitle
        heading="payment"
        subHeading="...please process..."
      ></SectionTitle>


      <h2 className="text-center py-8">Teka O teka tumi uira uira asho ...!!!</h2>


     <div className="p-8 flex flex-col     ">
     <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
     </div>
    </section>
  );
};

export default Payment;

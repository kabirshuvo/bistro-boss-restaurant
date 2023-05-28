import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hooks/useCart";




const FoodCard = ({item}) => {
    const {image, price, recipe, name, _id} = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
if(user && user.email){
  const orderdItem = {orderdFood: _id, name, image, price, email: user.email}
  fetch('http://localhost:5000/carts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(orderdItem)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedId){
      // refetch cart to update the number of items of the cart
      refetch()
Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: `${name} added to the cart`,
  showConfirmButton: false,
  timer: 2000
})
    }
  })
}
else{
  Swal.fire({
    title: 'Please Login First to continue Order ',
    text: "Enjoy The Bistro Boss Foods",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'LogIn Now'
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/login', {state: {from: location}})
    }
  })
}
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={name}
          className="rounded-xl"
        />
        <p className="absolute right-16 top-16 px-2 rounded-md text-warning bg-slate-900 bg-opacity-70 ">${price}</p>
      </figure>
     
      <div className="card-body items-center text-center">
      
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline btn-info">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item;
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
          <button className="btn btn-outline btn-info">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

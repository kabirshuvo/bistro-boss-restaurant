import FoodCard from "../Shared/FoodCard";


const OrdersTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mx-7 justify-center items-center">
        {
               items.map(item => <FoodCard
               key={item._id}
               item={item}
               ></FoodCard>)
           }
        </div>
    );
};

export default OrdersTab;
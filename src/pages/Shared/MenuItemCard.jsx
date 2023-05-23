
const MenuItemCard = ({item}) => {

    const {image, price, recipe, name} = item;
    return (
        <div className="flex space-x-7 items-center">
            <img style={{width: '7rem', borderRadius: '0 14rem 14rem 14rem'}} src={image}></img>
            <div>
                <h3 className="uppercase text-info">{name}</h3>
                <p className="text-success">{recipe}</p>
            </div>
            <p className="text-warning">${price}</p>
        </div>
    );
};

export default MenuItemCard;
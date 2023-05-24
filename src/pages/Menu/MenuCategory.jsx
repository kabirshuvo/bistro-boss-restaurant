import CoverImage from "../Shared/CoverImage";
import MenuItemCard from "../Shared/MenuItemCard";

const MenuCategory = ({ items, title, img }) => {
  return (
    <>
    {title && <CoverImage img={img} title={title}></CoverImage>}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-7 py-7 my-7">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;

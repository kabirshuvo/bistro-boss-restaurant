import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItemCard from "../Shared/MenuItemCard";

const PopularMenu = () => {

const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular')


  return (
    <section className="my-40">
      <SectionTitle
        subHeading="From Our Delicious Menu"
        heading="Popular Items"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-7 py-7 my-7">
        {popular.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <button className="btn btn-outline btn-info my-8 border-0 border-b-4">
        Order Now
      </button>
    </section>
  );
};

export default PopularMenu;

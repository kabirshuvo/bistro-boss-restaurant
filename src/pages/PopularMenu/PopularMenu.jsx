import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItemCard from "../Shared/MenuItemCard";

const PopularMenu = () => {
  const [menu, SetMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        SetMenu(popularItems);
      });
  });

  return (
    <section className="my-2">
      <SectionTitle
        subHeading="From Our Delicious Menu"
        heading="Popular Items"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-7 py-7 my-7">
        {menu.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;

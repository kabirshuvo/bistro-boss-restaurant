import { Helmet } from "react-helmet-async";

// imported images

import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";


import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import CoverImage from "../../Shared/CoverImage";
import MenuCategory from "../MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* Main Page Cover Image */}
      <CoverImage img={menuImage} title="Our Menu"></CoverImage>


{/*  Offerd Section*/}
<section>
    {/* Todays Offer */}
    <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
{/* Offerd menu Items */}
     
</section>

<section>
<MenuCategory 
items={offered} 
title="offered"
img={saladImage}
></MenuCategory>
</section>


{/* Dessert Section */}
<section>
      <MenuCategory 
      items={desserts}
      title="dessert"
      img={dessertImage}
      ></MenuCategory>
</section>



{/* Pizza Section */}
<section>
      <MenuCategory 
      items={pizza}
      title="pizza"
      img={pizzaImage}
      ></MenuCategory>
</section>



{/* Salad Section */}
<section>
      <MenuCategory 
      items={salad}
      title="salad"
      img={saladImage}
      ></MenuCategory>
</section>



{/* Soup Section */}
<section>
      <MenuCategory 
      items={soup}
      title="soup"
      img={soupImage}
      ></MenuCategory>
</section>


</div>
  );
};

export default Menu;

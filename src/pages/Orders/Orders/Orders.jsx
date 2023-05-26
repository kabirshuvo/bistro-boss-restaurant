import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCoverImage from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import CoverImage from "../../Shared/CoverImage";
import OrdersTab from "../ordersTab";


const Orders = () => {
    const categories = ['pizza', 'salad', 'soup', 'dessert', 'drinks', 'offered']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);


  const [menu] = useMenu();

  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>

<Helmet>
    <title>Bistro Boss | Order Food</title>
</Helmet>



      <CoverImage img={orderCoverImage} title="Order Now"></CoverImage>

      <div className="tabs">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Pizza</Tab>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
            <Tab>offered</Tab>
          </TabList>
          <TabPanel>
            <OrdersTab items={pizzas}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={salads}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={soups}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={desserts}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={drinks}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={offered}></OrdersTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;

import { Helmet } from "react-helmet-async";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimoianls/Testimonials";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
          <Helmet>
<title>Bistro Boss | Home</title>
          </Helmet>
          <Banner></Banner>
          <Categories></Categories>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
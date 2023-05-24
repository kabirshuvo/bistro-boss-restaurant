import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
          
          <Banner></Banner>
          <Categories></Categories>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
        </div>
    );
};

export default Home;
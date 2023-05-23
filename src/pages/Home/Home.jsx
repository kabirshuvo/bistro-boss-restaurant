import Categories from "../Categories/Categories";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
          
          <Banner></Banner>
          <Categories></Categories>
          <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;
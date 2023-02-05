import About from "./About";
import Gallery from "./Gallery";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <About />
      <Gallery />
    </div>
  );
};

export default Home;

import About from "./About";
import Gallery from "./Gallery";
import Process from "./Process";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <About />
      <Gallery />
      <Process />
    </div>
  );
};

export default Home;

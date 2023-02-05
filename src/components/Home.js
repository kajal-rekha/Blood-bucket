import About from "./About";
import Blog from "./Blog";
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
      <Blog />
    </div>
  );
};

export default Home;

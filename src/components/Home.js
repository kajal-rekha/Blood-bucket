import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
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
      <Contact />
    </div>
  );
};

export default Home;

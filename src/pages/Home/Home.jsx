import BrightScopeDifference from "./components/BrightScopeDifference";
import HeroSlider from "./components/HeroSlider";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div className="container">
        <HeroSlider />
        <OurServices />
      </div>
      <WhyChooseUs />
      <div className="container">
        <BrightScopeDifference />
      </div>
    </>
  );
};

export default Home;

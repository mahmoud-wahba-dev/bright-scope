import HeroSlider from "./components/HeroSlider"; // ✅ this is fine

const Home = () => {
  return (
    <>
      <div className="container">
        <HeroSlider />
      </div>

      <div className="container">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
};

export default Home;

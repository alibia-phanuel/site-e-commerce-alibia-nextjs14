import Slider from "./components/Slider";

const Home = async () => {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl text-[#4B5563]">Produit vedette</h1>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl mb-10 text-[#4B5563]">catégories</h1>
      </div>
    </div>
  );
};

export default Home;

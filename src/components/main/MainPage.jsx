import BackgroundSlider from "../slider/BackgroundSlider";
import BrandSection from "../slider/BrandSection";
import Categories from "../slider/Categories";
import DiscountSection from "../slider/DiscountSection";
import Banner from "./Banner";

function MainPage() {
  return (
    <main>
      <BackgroundSlider />
      <DiscountSection />
      <Banner />
      <Categories />
      <BrandSection />
    </main>
  );
}

export default MainPage;

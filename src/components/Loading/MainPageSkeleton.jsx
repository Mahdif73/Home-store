import BackgroundSliderSkeleton from "./mainpageskeleton/BackgroundSliderSkeleton";
import BannerSkeleton from "./mainpageskeleton/BannerSkeleton";
import BrandSectionSkeleton from "./mainpageskeleton/BrandSectionSkeleton";
import CategoriesSkeleton from "./mainpageskeleton/CategoriesSkeleton";
import DiscountSliderSkeleton from "./mainpageskeleton/DiscountSliderSkeleton";

function MainPageSkeleton() {
  return (
    <main>
      <BackgroundSliderSkeleton />
      <DiscountSliderSkeleton />
      <BannerSkeleton />
      <CategoriesSkeleton />
      <BrandSectionSkeleton />
    </main>
  );
}

export default MainPageSkeleton;

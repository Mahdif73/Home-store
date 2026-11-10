import DiscountSlider from "./DiscountSlider";

function DiscountSection() {
  return (
    <section className="container mt-16 bg-(--border-color-alt) rounded-2xl py-6">
      <h2 className="font-semibold  text-2xl pr-10 pb-4 text-(--text-color) ">
        بیشترین تخفیف ها
      </h2>

      <DiscountSlider />
    </section>
  );
}

export default DiscountSection;

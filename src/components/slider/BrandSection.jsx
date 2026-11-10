import BrandSlider from "./BrandSlider";

function BrandSection() {
  return (
    <section className="container my-16">
      <h2 className="pr-10">برند ها</h2>
      <div className="brand-items  mt-4 bg-(--body-color)  border border-solid border-(--border-color) rounded-2xl">
        <BrandSlider />
      </div>
    </section>
  );
}

export default BrandSection;

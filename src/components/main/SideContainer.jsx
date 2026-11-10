import SideList from "./SideList";

function SideContainer({ className = "" }) {
  return (
    <section
      className={`rounded-2xl p-[1rem_1rem_0_1rem] h-fit bg-(--border-color-alt) border border-(--border-color) xs:hidden lg:block lg:w-68  ${className}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h4 className="flex pt-2 text-base font-bold">فیلترها</h4>
      </div>

      <div className="flex items-start flex-col">
        <SideList />
      </div>
    </section>
  );
}

export default SideContainer;

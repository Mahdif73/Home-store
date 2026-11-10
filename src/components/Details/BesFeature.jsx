function BesFeature({ attribute }) {
  return (
    <div className="text-base text-(--text-color) bg-(--border-color-alt) p-[0.76rem] rounded-[7px] mr-4 nth-[1]:mr-1 nth-[4]:mr-1">
      <p className="text-center">
        {attribute.name}: {attribute.value} {attribute.unit}
      </p>
    </div>
  );
}

export default BesFeature;

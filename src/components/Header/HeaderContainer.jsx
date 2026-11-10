const reactDescriptions = [
  "کیفیت بالا، قیمت مناسب، ارسال سریع – سه اصل فروشگاه ما!",
  "از تخفیف های امروزمون جا نمونی ! بیشترین تخفیف ها با هوم استور",
  "بیا یه صفحه کتاب ورق بزن و دنیاتو عوض کن! کتاب‌های محبوبت با تخفیف ویژه منتظرت هستند",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function HeaderContainer() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <div className="py-3 bg-(--back-color-alt)">
      <div className="pr-4">
        <p className="flex justify-center font-bold text-(--text-color) sm:text-lg xs:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HeaderContainer;

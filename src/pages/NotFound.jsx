import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "پیدا نشد !";

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  return (
    <section className="container mt-16 text-base flex flex-col justify-center items-center">
      <span className="border-3 border-dashed border-(--border-color) p-8 font-bold rounded-2xl">
        صفحه مورد نظر پیدا نشد!
      </span>
      <Link className="mt-8 text-(--back-color)" to="/">
        رفتن به صفحه اصلی
      </Link>
    </section>
  );
}

export default NotFound;

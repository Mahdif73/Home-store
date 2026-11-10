import { useEffect } from "react";
import MainPage from "../components/main/MainPage";
import { useDiscount } from "../components/slider/useDiscount";
import MainPageSkeleton from "../components/Loading/MainPageSkeleton";

function HomePage() {
  useEffect(function () {
    document.title = `خانه `;

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  const { isLoading } = useDiscount();
  if (isLoading) return <MainPageSkeleton />;
  return <MainPage />;
}

export default HomePage;

import { Outlet } from "react-router-dom";
import ProfileList from "../components/Profile/ProfileList";
import ProfileNavList from "../components/Profile/ProfileNavList";

function ProfileLayout() {
  return (
    <section className="container">
      <div className="mt-10 flex justify-start gap-3 w-full">
        <aside className="w-75 hidden border border-(--border-color) bg-(--border-color-alt) text-(--text-color) rounded-4xl h-fit lg:block">
          <ProfileList />
        </aside>

        <div className="mr-4 sm:min-w-133.5 md:min-w-178.5 lg:max-w-[70%] lg:min-w-152.5 xl:min-w-201.25 2xl:min-w-245">
          <ProfileNavList />
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default ProfileLayout;

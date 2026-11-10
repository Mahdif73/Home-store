import { smallWallpaper } from "../../Services/apiWallpaper";

function Banner() {
  return (
    <section className="mt-16 container">
      <div className="grid gap-8 xs:grid-cols-1 xs:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:px-8">
        {smallWallpaper.map((wall, index) => (
          <img
            key={index}
            src={wall}
            className="rounded-[1.25rem] object-fill object-center"
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;

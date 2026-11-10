import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
function Loader() {
  return (
    // Default values shown
    <div className="w-12.5 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Ring
        size="60"
        stroke="10"
        bgOpacity="0.2"
        speed="2"
        color="var(--back-color)"
      />
    </div>
  );
}

export default Loader;

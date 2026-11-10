import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        const modalOpen = document.querySelector(".modal");
        if (modalOpen) return;
        // if (e.code.toLowerCase() === key.toLowerCase())
        if (e.key && e.key.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key],
  );
}

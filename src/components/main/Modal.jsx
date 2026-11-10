import { createPortal } from "react-dom";
import Button from "./Button";
import { HiXMark } from "react-icons/hi2";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  useEffect(() => {
    const closeModals = ["filter-modal", "category-modal"];

    const handleResize = () => {
      if (
        window.innerWidth > 992 &&
        closeModals.includes(name) &&
        openName === name
      ) {
        close();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openName, close, name]);

  if (name !== openName) return null;
  return createPortal(
    <>
      <div className="pointer-events-auto inset-0 fixed top-0 right-0 w-full h-full z-998 bg-[rgba(0, 0, 0, 0.6)] backdrop-blur-xs"></div>
      <div
        className=" fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl h-fit transition delay-40 z-1000 flex flex-col justify-center  border border-(--border-color) w-auto overflow-y-hidden"
        ref={ref}
      >
        <Button onClick={close} htmlType="modal_btn">
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

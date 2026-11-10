function Button({ children, disabled, onClick, type, htmlType, aria }) {
  const base =
    "cursor-pointer border-0 p-0 leading-none outline-0 font-[Vazirmatn]";

  const types = {
    account: base + " text-(--first-color) w-full flex items-center gap-4",
    add:
      base +
      " text-base w-35 h-12.5 bg-(--text-color) text-(--body-color) p-2 rounded-[7px]",
    go:
      base +
      " text-base w-40 h-12.5 bg-(--text-color) text-(--body-color) p-2 rounded-[7px]",
    filter: base + " text-sm text-(--text-color) gap-4",
    details:
      base +
      " mr-[1.2rem] py-4 min-w-[160px] h-12.5 bg-(--text-color) text-(--body-color) rounded-[7px] disabled:bg-(--text-color-light) disabled:text-(--border-color-alt)",
    order:
      base +
      " bg-(--text-color) text-(--body-color) border-none w-37.5 h-12.5 rounded-[7px] text-base hover:bg-(--back-color)",
    nav_account:
      base +
      " w-full flex items-center justify-center text-sm text-(--text-color-light) text-xs sm:text-sm md:text-base",
    pay:
      base +
      " text-lg bg-(--back-color) text-(--border-color-alt) w-28.5 py-4 rounded-[7px] disabled:bg-(--text-color-light)",
    review:
      base +
      " p-3 rounded-xl bg-(--back-color) text-(--border-color-alt) gap-4",
    edit: base + " text-(--back-color) text-sm ml-8 mb-2 xs:mt-8 md:mt-0",
    modal_btn:
      base +
      " absolute left-3 top-3 text-lg bg-(--back-color) text-(--body-color) rounded-[7px] pt-2px w-4.5 h-4.5 hover:text-(--back-color) hover:rounded-[7px] hover:w-4.5 hover:h-4.5",
    login:
      base +
      " mt-[1.5rem] mb-4 rounded-xl h-13.75 w-87.5 bg-(--back-color) text-(--border-color-alt) text-base",
    trash: " text-2xl pr-4 disabled:text-(--back-color)",
    agree: " text-xs pr-4 text-(--back-color) rounded-[7px]",
    contact:
      " flex w-27 h-[55px] text-base justify-center items-center bg-(--back-color) text-(--border-color-alt) border border-(--border-color)  px-4 mt-4 rounded-2xl xl:mt-2 xl:mb-4  xl:w-[150px] xl:text-xl",
    address:
      base +
      " w-37.5 bg-(--text-color) text-(--body-color) text-base p-3 rounded-[7px]",
    password: "absolute left-3 top-[50%] translate-y-[-50%]",
    login_password: "absolute left-3 top-[37%] translate-y-[-50%]",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={types[htmlType]}
      aria-label={aria}
    >
      {children}
    </button>
  );
}

export default Button;

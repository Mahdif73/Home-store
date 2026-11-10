import { useAddressTitle } from "../../hooks/useAddressTitle";
import { faDigitsNum, formatPhone } from "../../utils/helpers";

function ShowAddress({ address }) {
  const { handleSelectOrg, isPending } = useAddressTitle();

  return (
    <div
      className={`relative rounded-2xl max-w-120 pt-6 pb-8 xs:text-sm lg:text-base cursor-pointer hover:shadow-(--shadow-md) hover:border hover:border-(--border-color) ${address?.isTitle ? "border-2 border-(--border-color) transition delay-25 shadow-[0_0_12px_var(--body-color)] bg-(--back-color-alt)" : "bg-(--body-color)"}  ${isPending ? "blur-xs bg-(--back-color)" : "bg-(--body-color)"}`}
      onClick={() => {
        if (address?.isTitle) return;
        handleSelectOrg(address.id);
      }}
    >
      <div
        className={`absolute top-3.75 left-3.75 w-5 h-5 rounded-[50%] border border-(--border-color)  ${address?.isTitle ? "bg-(--back-color)" : ""} `}
      ></div>
      <p className=" mb-4 pr-2">{address.customerName} </p>

      <p className="mb-4  pr-2">موبایل: {formatPhone(address.phone)}</p>

      <p className="mb-4  pr-2">کد پستی: {faDigitsNum(address.postCode)}</p>
      <p className="mb-4  pr-2">
        آدرس: {address.state} - {address.city} - {address.address}
      </p>
    </div>
  );
}

export default ShowAddress;
